<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laratrust\Traits\LaratrustUserTrait;

use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use LaratrustUserTrait;
    use Notifiable;
    use HasApiTokens;

    protected $table = 'users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
      'name',
      'email',
      'password',
      'last_name',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    protected $appends = ['full_name'];

    /**
     * Получение данных о пользователе
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    function usermeta() {
        return $this->hasOne(UserMeta::class, 'user_id');
    }

    /**
     * Получение данных о пользователе
     * @return string
     */
    public function getFullNameAttribute() {
        if(!$this->usermeta) return "";

        return $this->usermeta->first_name." ".$this->usermeta->second_name;
    }

    /**
     * Связь пользователей с ролями
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function roles()
    {
        return $this->belongsToMany(Role::class, 'role_user');
    }

    /**
     * Проверять, является ли пользователь админом
     * @return bool
     */
    public function isAdmin()
    {
        foreach ($this->roles()->get() as $role) {
            if ($role->name == 'admin') {
                return true;
            }
        }
        return false;
    }
}
