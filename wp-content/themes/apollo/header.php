<?php
/**
 * Header file for the Twenty Twenty WordPress default theme.
 *
 */

?><!DOCTYPE html>

<html class="no-js" <?php language_attributes(); ?>>

	<head>

		  <meta charset="<?php bloginfo( 'charset' ); ?>">
		  <meta name="viewport" content="width=device-width, initial-scale=1.0" >

		  <link rel="profile" href="https://gmpg.org/xfn/11">
		  <meta charset="UTF-8">
		  <meta name="viewport" content="width=device-width, initial-scale=1.0">
		  <title>Barkev</title>
		  <link rel="stylesheet" href="css/bootstrap.min.css" />
		  <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
		  <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet">
		  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/jquery.slick/1.3.15/slick.css"/>
		  <link rel="stylesheet" href="css/slick.css">
		  <link rel="stylesheet" href="css/slick-theme.css">
		  <link rel="stylesheet" href="css/aos.css" />
		  <link rel="stylesheet" href="css/style.css">
		  <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">

		<?php wp_head(); ?>

	</head>

	<body <?php body_class(); ?>>

		<?php
		wp_body_open();
		?>

		<header class="without-sticky">
      <div class="mobile-header-menu d-md-none">
        <div class="m-header-top py-3">
          <div class="col-sm-12">
            <div class="row">
              <div class="col-6">
                <div class="m-top-left">
                  <a>
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    Call us Today : +61 2 968827500
                  </a>
                </div>
              </div>
              <div class="col-6">
                <div class="m-top-right">
                  <div class="signIn-right text-right">
                    <a href="your-account-page.html">
                      <i class="fa fa-user-o" aria-hidden="true"></i>
                      Sign In
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="m-header-logo d-flex justify-content-between pb-3 px-3">
          <div class="menu-icon" id="show-sidebar">
            <a><img src="images/hamburger-menu-icon.svg" class="img-fluid" alt="hamburger-menu-icon" title=""></a>
          </div>
          <div class="menu-logo"><a href="index.html"><img src="img/apollo_logo.png" class="img-fluid" alt="logo" title="" /></a></div>
          <div class="menu-cart d-flex justify-content-end align-items-center mt-2">
            <a href="wishlist-items.html"><img src="images/Wishlist.svg" class="img-fluid" alt="Wishlist" title=""></a>
            <a href="shopping-cart-items.html"><img src="images/Shopping-Bag.svg" class="img-fluid" alt="Shopping Bag" title=""></a>
          </div>
        </div>

        <div class="humberger-menu page-wrapper chiller-theme">
          <!-- <a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
            <i class="fas fa-bars"></i>
          </a> -->
          <nav id="sidebar" class="sidebar-wrapper">
            <div class="sidebar-content">
              <div class="sidebar-brand d-none">
                <div id="close-sidebar">
                  <img src="images/close.svg" class="img-fluid" alt="cross icon" title="">
                </div>
              </div>
              
             
              <!-- sidebar-search  -->
              <div class="sidebar-menu">
                <ul>
                  <li class="sidebar-dropdown">
                    <a>
                      <span>Home</span>
                    </a>
                    
                  </li>
                  <li class="sidebar-dropdown">
                    <a href="#">
                      <span>Service</span>
                    </a>
                    
                  </li>
                  <li class="sidebar-dropdown">
                    <a href="#">
                      <span>Product</span>
                    </a>
                    
                  </li>
                  <li class="sidebar-dropdown">
                    <a href="#">
                      <span>Gallery</span>
                    </a>
                    
                  </li>
                  <li class="sidebar-dropdown">
                    <a href="#">
                      <span>About US</span>
                    </a>
                   
                  </li>
                  <li class="sidebar-dropdown">
                    <a href="#">
                      <span>Contact US</span>
                    </a>
                    
                  </li>
                  
                  
                </ul>
              </div>
              <!-- sidebar-menu  -->
            </div>
            <!-- sidebar-content  -->
            <div class="sidebar-footer">
              <a href="#">
                <i class="fa fa-bell"></i>
                <span class="badge badge-pill badge-warning notification">3</span>
              </a>
              <a href="#">
                <i class="fa fa-envelope"></i>
                <span class="badge badge-pill badge-success notification">7</span>
              </a>
              <a href="#">
                <i class="fa fa-cog"></i>
                <span class="badge-sonar"></span>
              </a>
              <a href="#">
                <i class="fa fa-power-off"></i>
              </a>
            </div>
          </nav>
          <!-- sidebar-wrapper  -->
          <!-- <main class="page-content">
            
          </main> -->
          <!-- page-content" -->
        </div>

      </div>
      
      <div class="header-top d-none d-sm-none d-md-block">
        <div class="col-sm-12">
          <div class="row">
            <div class="col-md-6 col-lg-6 text-left">
              <div class="top-inner-left">
                <a>
                  <i class="fa fa-phone" aria-hidden="true"></i>
                   Call us Today : +61 2 968827500
                </a>
                <a>
                  <i class="fa fa-envelope-o" aria-hidden="true"></i>enquiries@nationalapollo.com.au
                </a>
              </div>
            </div>
            
            <div class="col-md-2 col-lg-4 text-right">
              <div class="signIn-right">
                
                  <!--<i class="fa fa-user-o" aria-hidden="true"></i>-->
                  
                 National Warranty
                
              </div>
            </div>                    
          </div>
        </div>
      </div>
      <nav class="custom-navbar navbar navbar-expand-md navbar-dark p-0 position-relative d-none d-sm-none d-md-flex">
        <div class="d-flex">
            <!-- <a class="navbar-brand mr-0" href="#">Bootstrap 4</a> -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
        <div class="navbar-collapse collapse justify-content-center" id="collapsingNavbar">
          <div class="centered-logo">
            <a href="index.html">
              <img src="img/apollo_logo.png" class="img-fluid" alt="" title="">
            </a>
          </div>
          <ul class="navbar-nav w-100 justify-content-center">
            <li class="nav-item active dropdown">
                <!-- <a class="nav-link">ENGAGEMENT</a> -->
                <a href="engagemant-category.html"  class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Home <!--<span class="caret"></span>-->  </a>
                
            </li>
            <li class="nav-item dropdown">
                <!-- <a class="nav-link">FINE JEWELERY</a> -->
                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Service <!--<span class="caret"></span>-->  </a>
                
            </li>
            <li class="nav-item dropdown">
              <a href="choose-diamond-page.html"  class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Product</a>
              
            </li>
            <li class="nav-item dropdown">
              <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Gallery</a>
             
            </li>
            <li class="nav-item">
                <a class="nav-link" href="about-us.html">Abput US</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="about-us.html">Contact US</a>
            </li>
             <li class="nav-item onsaleiem">
                <a class="nav-link" href="about-us.html">On Sale</a>
            </li>
          </ul>
          <div class="center-nav-right">
            <i class="fa fa-user-o" aria-hidden="true"></i>
            <a href="wishlist-items.html"><img src="images/Wishlist.svg" class="img-fluid" alt="Wishlist icon" title=""></a>
            <a href="shopping-cart-items.html"><img src="images/Shopping-Bag.svg" class="img-fluid" alt="Shopping-Bag icon" title=""></a><i class="fa fa-search" aria-hidden="true"></i>
          </div>
        </div>
        <div class="navbar-right">
          <div class="center-nav-right">
            <i class="fa fa-user-o" aria-hidden="true"></i>
            <a href="wishlist-items.html"><img src="images/Wishlist.svg" class="img-fluid" alt="Wishlist icon" title=""></a>
            <a href="shopping-cart-items.html"><img src="images/Shopping-Bag.svg" class="img-fluid" alt="Shopping-Bag icon" title=""> </a>
            <i class="fa fa-search" aria-hidden="true"></i>
          </div>
          
          
        </div>
      </nav>
      

    </header><!-- #site-header -->

		