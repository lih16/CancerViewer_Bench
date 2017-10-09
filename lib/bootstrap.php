<?php
//require_once 'model.php';
//require_once 'core/view.php';
//require_once 'core/controller.php';
//require_once 'core/route.php';
//define('DEBUG', true);
//define('DEBUG_SLOW_DOWN_AJAX', 1000);
//define('ENVIRONMENT', 'development');

//if (ENVIRONMENT == 'development' || ENVIRONMENT == 'dev') {
 //   error_reporting(E_ALL);
   // ini_set("display_errors", 1);
//}



define ( 'BASE_PATH', dirname ( __FILE__ ) . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR );

define ( 'LIB_PATH', BASE_PATH . 'lib' . DIRECTORY_SEPARATOR );
define ( 'MODEL_PATH', BASE_PATH . 'model' . DIRECTORY_SEPARATOR );
define ( 'VIEW_PATH', BASE_PATH . 'view' . DIRECTORY_SEPARATOR );
define ( 'CONTROLLER_PATH', BASE_PATH . 'controller' . DIRECTORY_SEPARATOR );
define ( 'DATA_PATH', BASE_PATH . 'data' . DIRECTORY_SEPARATOR );
define ( 'DB_HOST', 'ec2-34-234-146-130.compute-1.amazonaws.com' );
define ( 'DB_NAME', 'wangj27' );
define ( 'DB_PASS', 'snoopy' );
define ( 'DB_USER', 'kb_CancerVariant_Curation' );



$url = isset( $_SERVER['URL'] ) ? $_SERVER["URL"] : $_SERVER["SCRIPT_NAME"] ;
define ('BASE_URL_PATH', dirname( $url ));
//define ('BASE_URL', (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on' ? 'https://' : 'http://') . $_SERVER["HTTP_HOST"] .  BASE_URL_PATH  );
//define ('APP_URL', BASE_URL );



$config = array();
//$config['available_locales'] = array('hu', 'en');

//$config['deploymented-url'] = 'https://address-book.patrikx3.com/';


require_once LIB_PATH . 'view.php';
require_once LIB_PATH . 'abstract_model.php';
require_once LIB_PATH . 'controller_base.php';
require_once LIB_PATH . 'bootstrap.php';
require_once LIB_PATH . 'Route.php';
require_once LIB_PATH . 'connection.php';
require_once LIB_PATH . 'json.php';
require_once LIB_PATH . 'logging.php';

session_save_path('/hpc/users/lih16/www/session');
ini_set('session.gc_probability', 1);
define ( 'CSS_PATH', BASE_URL_PATH  . DIRECTORY_SEPARATOR . 'css' . DIRECTORY_SEPARATOR);
define ( 'JS_PATH', BASE_URL_PATH  . DIRECTORY_SEPARATOR . 'javascript' . DIRECTORY_SEPARATOR);



Route::start(); // run routing
