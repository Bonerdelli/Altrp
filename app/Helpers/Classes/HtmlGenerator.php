<?php
namespace App\Helpers\Classes;

use App\Page;
use ZipArchive;
use App\Reports;
use DOMDocument;
use RecursiveIteratorIterator;
use RecursiveDirectoryIterator;
use Illuminate\Support\Facades\Storage;

class HtmlGenerator{
    
    public function __construct(String $html, String $cssRules, int $reportID) {
        $this->html = $html;
        $this->cssRules = $cssRules;
        $this->report = Page::findOrFail($reportID);
        $this->storagePath = Storage::disk('local')->getDriver()->getAdapter()->getPathPrefix();
    }

    public function getParsedHtml(){
        $dom = new DOMDocument();
        $dom->loadHTML($this->html);
        $styles = $dom->getElementsByTagName('style');
        foreach($styles as $key=>$style){
            $style->parentNode->removeChild($style);
        }
        $reportsPath = $this->storagePath.'public/reports';
        if(!is_dir($reportsPath)){
            mkdir($reportsPath,0777, true);
        }

        $currentReportPath = $reportsPath."/{$this->report->id}";
        if(!is_dir($currentReportPath)){
            mkdir($currentReportPath,0777, true);
        }

        $cssPath = $currentReportPath.'/css';
        if(!is_dir($currentReportPath.'/css')){
            mkdir($currentReportPath.'/css',0777, true);
        }

        $jsPath = $currentReportPath.'/js';
        if(!is_dir($currentReportPath.'/js')){
            mkdir($currentReportPath.'/js',0777, true);
        }
        
        $imgPath = $currentReportPath.'/img';
        if(!is_dir($currentReportPath.'/img')){
            mkdir($currentReportPath.'/img',0777, true);
        }

        $cssFile = fopen($cssPath.'/style.css','w');
        $oldLinkNode = $dom->getElementsByTagName('link')->item(1);
        $oldLink = $oldLinkNode->getAttribute('href');
        $oldCss =  file_get_contents($oldLink);
        fwrite($cssFile,$oldCss);
        fwrite($cssFile,$this->cssRules);
        fclose($cssFile);
        $oldLinkNode->parentNode->removeChild($oldLinkNode);

        $head  = $dom->getElementsByTagName('head')->item(0);
        $link = $dom->createElement('link');
        $link->setAttribute('rel','stylesheet');
        $link->setAttribute('href','./css/style.css');
        $head->appendChild($link);
        
        $scriptIndex = $dom->getElementsByTagName('script')->length;
        $allScripts = $dom->getElementsByTagName('script');
        $script = $dom->getElementsByTagName('script')->item($scriptIndex-1);
        $sciprtData = file_get_contents($script->getAttribute('src'));
        $scriptFile = fopen($jsPath.'/index.js','w');
        fwrite($scriptFile,$sciprtData);
        fclose($scriptFile);
        $scriptTag = $dom->createElement('script');
        $scriptTag->setAttribute('src','./js/index.js');
        $body = $dom->getElementsByTagName('body');
        foreach($allScripts as $src){
            $src->parentNode->removeChild($src);
        }
        if ($body && 0<$body->length) {
            $body = $body->item(0);
            $body->appendChild($scriptTag);
        }

        $images = $dom->getElementsByTagName('img');
        if($images->length>0){
            foreach($images as $img){
                $link = $img->getAttribute('src');
                $filename = explode('/',$link);
                $filename = $filename[count($filename)-1];
                $path = $imgPath."/$filename";
                file_put_contents($path , file_get_contents($link));
                $img->setAttribute('src',"./img/$filename");
            }
        }
        
        $dom->saveHTMLFile($currentReportPath.'/index.html');
        
        $zipFile = "$currentReportPath/{$this->report->id}.zip"; 
        if(is_file($zipFile)){
            unlink($zipFile);
        }
        $this->zipFolder($currentReportPath,$zipFile);
        if(is_file($zipFile)){
            return true;
        }
        return false;
    }

    private function zipFolder($source, $destination)
    {
        if (!extension_loaded('zip') || !file_exists($source)) {
            return false;
        }

        $zip = new ZipArchive();
        if (!$zip->open($destination, ZIPARCHIVE::CREATE) ) {
            return false;
        }

        $source = str_replace('\\', '/', realpath($source));

        if (is_dir($source) === true)
        {
            $files = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($source), RecursiveIteratorIterator::SELF_FIRST);

            foreach ($files as $file)
            {
                    $file = str_replace('\\', '/', $file);

                    // Ignore "." and ".." folders
                    if( in_array(substr($file, strrpos($file, '/')+1), array('.', '..')) )
                        continue;

                    $file = realpath($file);

                    if (is_dir($file) === true)
                    {
                        $zip->addEmptyDir($file);
                    }
                    else if (is_file($file) === true)
                    {
                        $zip->addFromString(str_replace($source . '/', '', $file), file_get_contents($file));
                    }
                    else if (is_file($source) === true)
                    {
                       $zip->addFromString(basename($source), file_get_contents($source));
                    }
            }
        } 
        
        return $zip->close();
    }

}