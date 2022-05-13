<?php

namespace SocialiteProviders\Geobuilder;

use SocialiteProviders\Manager\OAuth2\AbstractProvider;
use SocialiteProviders\Manager\OAuth2\User;

class GeobuilderProvider extends AbstractProvider
{
    /**
     * Unique Provider Identifier.
     */
    const IDENTIFIER = 'SOCIALITE_GEOBUILDER';

    /**
     * {@inheritdoc}
     */
    protected function getAuthUrl($state)
    {
        return $this->buildAuthUrlFromBase('https://fs.geobuilder.ru/idp/connect/authorize', $state);
    }

    // /**
    //  * {@inheritdoc}
    //  */
    // protected function getTokenUrl()
    // {
    //     return 'https://api.zeit.co/v2/oauth/access_token';
    // }
    //
    // /**
    //  * {@inheritdoc}
    //  */
    // protected function getUserByToken($token)
    // {
    //     $response = $this->getHttpClient()->get('https://api.zeit.co/www/user', [
    //         'headers' => [
    //             'Authorization' => 'Bearer '.$token,
    //         ],
    //     ]);
    //
    //     return json_decode($response->getBody(), true);
    // }
    //
    // /**
    //  * {@inheritdoc}
    //  */
    // protected function mapUserToObject(array $user)
    // {
    //     return (new User())->setRaw($user['user'])->map([
    //         'id'       => $user['user']['uid'],
    //         'nickname' => $user['user']['username'],
    //         'name'     => $user['user']['name'],
    //         'email'    => $user['user']['email'],
    //         'avatar'   => 'https://zeit.co/api/www/avatar/'.$user['user']['uid'],
    //     ]);
    // }
}
