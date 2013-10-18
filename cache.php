<?php
// Add the correct Content-Type for the cache manifest
header('Content-Type: text/cache-manifest');

$hashes = "";

// Create the Arrays for each category
$network = array("\n\nNETWORK:");
$cache = array("\n\nCACHE:",".html");
$ignore = array("error_log",".git","nbproject","LICENSE","README");


$dir = new RecursiveDirectoryIterator(".");

foreach(new RecursiveIteratorIterator($dir) as $file) {
	if ($file->IsFile() && $file != "./manifest.php" && substr($file->getFilename(), 0, 1) != "." && !preg_match('/\/\./', $file)) {
		if(preg_match('/.php$/', $file) && !preg_match('/index.php$/', $file)) {
				
				foreach($ignore as $item):
					if(strpos($file, $item)): $allow = FALSE; break; 
					else: $allow = TRUE; endif;
				endforeach;
			
			if($allow): 
				array_push($network,"\n" . $file); 
			endif;
			
		} else {
			foreach($ignore as $item):
				if(strpos($file, $item)): $allow = FALSE; break; 
				else: $allow = TRUE; endif;
			endforeach;
			
			if($allow): array_push($cache,"\n" . $file); endif;
		}
		$hashes .= md5_file($file);
	}
}

echo 'CACHE MANIFEST';

foreach($cache as $file): echo $file; endforeach;
foreach($network as $file): echo $file;	endforeach;

echo "\n\n# Hash:" . md5($hashes);
?>