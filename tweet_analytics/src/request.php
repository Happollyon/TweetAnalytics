<?php
if(isset($GET['user'])
{
If you're using cURL, you can use curl_setopt ($handle, CURLOPT_USERAGENT, 'browser description') to define the user-agent header of the request.

If you're using file_get_contents, check out this tweak of an example on the man page for file_get_contents:

// Create a stream
$opts = array(
  'http'=>array(
    'method'=>"GET",
    'header'=>"Authorization: Bearer AAAAAAAAAAAAAAAAAAAAABEmAAEAAAAAk%2B0QCzyK88Du%2F5kzJkvMoiHaoZ4%3DYicmiHcDfgq1r535ZGPR1XZTUcDOZuVyu8e4DPfFb0BWbaeZ8R\r\n"

  )
);

$context = stream_context_create($opts);

// Open the file using the HTTP headers set above
$file = file_get_contents('https://api.twitter.com/1.1/statuses/user_timeline.json?count=100&screen_name=Happollyon', false, $context);
echo $file;
}
?>