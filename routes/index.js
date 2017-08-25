import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from '../views/src/routes';
import reducers from '../views/src/reducers/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ADD_ITEM } from '../views/src/actions/list_actions';

let router = express.Router();

router.get('/', (req, res) => {
    /*
    Here we are first matching if the current url exists in the react router routes
     */
	match({ routes, location: req.originalUrl }, (error, redirectLocation, renderProps) => {
		if (error) {
			res.status(500).send(error.message)
		} else if (redirectLocation) {
			res.redirect(302, redirectLocation.pathname + redirectLocation.search)
		} else if (renderProps) {

		    /*
             http://redux.js.org/docs/recipes/ServerRendering.html
		     */
			const store = createStore(reducers);

			const html = ReactDOMServer.renderToString(
				<Provider store={store}>
					<RouterContext {...renderProps} />
				</Provider>
			);

			/*
			We can dispatch actions from server side as well. This can be very useful if you want
			to inject some initial data into the app. For example, if you have some articles that
			you have fetched from database and you want to load immediately after the user has loaded
			the webpage, you can do so in here.

			Here we are inject an list item into our app. Normally once the user has loaded the webpage
			we would make a request to the server and get the latest item list. But in the server we have
			instant connection to a database (for example, if you have a mongoDB or MySQL database installed
			in the server which contains all you items). So you can quickly fetch and inject it into the webpage.

			This will help SEO as well. If you load the webpage and make a request to the server to get all the
			latest items/articles, by the time Google Search Engine may not see all the updated items/articles.

			But if you inject the latest items/articles before it reaches the user, the Search Engine will see the
			item/article immediately.
			 */
			store.dispatch({
			    type: ADD_ITEM,
          payload: {
			               name: 'Components',
                     description: 'Description for components'
          }
      });

			const finalState = store.getState();

			res.status(200).send(renderFullPage(html, finalState));
		} else {
			res.status(404).send('Not found')
		}
	})
});


/*
In this function, you can render you html part of the webpage. You can add some meta tags or Opern Graph tags
using JS variables.
 */
function renderFullPage(html, initialState) {
	return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <style>#loading .svg-icon-loader {position: absolute;top: 50%;left: 50%;margin: -50px 0 0 -50px;}</style>
      <meta charset="UTF-8"><!--[if IE]><meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'><![endif]--><title>Delight - Bootstrap Material Design Admin Template</title>
      <meta name="description" content="">
      <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
      <link rel="apple-touch-icon-precomposed" sizes="144x144" href="../bin/assets/images/icons/apple-touch-icon-144-precomposed.png">
      <link rel="apple-touch-icon-precomposed" sizes="114x114" href="../bin/assets/images/icons/apple-touch-icon-114-precomposed.png">
      <link rel="apple-touch-icon-precomposed" sizes="72x72" href="../bin/assets/images/icons/apple-touch-icon-72-precomposed.png">
      <link rel="apple-touch-icon-precomposed" href="../bin/assets/images/icons/apple-touch-icon-57-precomposed.png">
      <link rel="shortcut icon" href="../bin/assets/images/icons/favicon.png">
      <link rel="stylesheet" type="text/css" href="../bin/assets/helpers/animate.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/helpers/boilerplate.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/helpers/border-radius.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/helpers/grid.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/helpers/page-transitions.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/helpers/spacing.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/helpers/typography.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/helpers/utils.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/helpers/colors.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/material/ripple.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/badges.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/buttons.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/content-box.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/dashboard-box.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/forms.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/images.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/info-box.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/invoice.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/loading-indicators.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/menus.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/panel-box.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/response-messages.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/responsive-tables.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/ribbon.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/social-box.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/tables.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/tile-box.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/elements/timeline.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/icons/fontawesome/fontawesome.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/icons/linecons/linecons.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/icons/spinnericon/spinnericon.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/accordion-ui/accordion.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/calendar/calendar.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/carousel/carousel.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/charts/justgage/justgage.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/charts/morris/morris.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/charts/piegage/piegage.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/charts/xcharts/xcharts.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/chosen/chosen.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/colorpicker/colorpicker.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/datatable/datatable.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/datepicker/datepicker.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/datepicker-ui/datepicker.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/daterangepicker/daterangepicker.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/dialog/dialog.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/dropdown/dropdown.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/dropzone/dropzone.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/file-input/fileinput.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/input-switch/inputswitch.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/input-switch/inputswitch-alt.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/ionrangeslider/ionrangeslider.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/jcrop/jcrop.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/jgrowl-notifications/jgrowl.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/loading-bar/loadingbar.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/maps/vectormaps.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/markdown/markdown.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/modal/modal.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/multi-select/multiselect.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/multi-upload/fileupload.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/nestable/nestable.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/noty-notifications/noty.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/popover/popover.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/pretty-photo/prettyphoto.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/progressbar/progressbar.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/range-slider/rangeslider.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/slidebars/slidebars.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/slider-ui/slider.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/summernote-wysiwyg/summernote-wysiwyg.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/tabs-ui/tabs.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/timepicker/timepicker.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/tocify/tocify.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/tooltip/tooltip.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/touchspin/touchspin.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/uniform/uniform.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/wizard/wizard.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/xeditable/xeditable.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/snippets/chat.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/snippets/files-box.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/snippets/login-box.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/snippets/notification-box.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/snippets/progress-box.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/snippets/todo.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/snippets/user-profile.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/snippets/mobile-navigation.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/application/mailbox.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/themes/admin/layout.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/themes/admin/color-schemes/default.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/themes/components/default.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/themes/components/border-radius.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/helpers/responsive-elements.css">
      <link rel="stylesheet" type="text/css" href="../bin/assets/helpers/admin-responsive.css">
      <script type="text/javascript" src="../bin/assets/js-core/jquery-core.js"></script>
      <script type="text/javascript" src="../bin/assets/js-core/jquery-ui-core.js"></script>
      <script type="text/javascript" src="../bin/assets/js-core/jquery-ui-widget.js"></script>
      <script type="text/javascript" src="../bin/assets/js-core/jquery-ui-mouse.js"></script>
      <script type="text/javascript" src="../bin/assets/js-core/jquery-ui-position.js"></script>
      <script type="text/javascript" src="../bin/assets/js-core/transition.js"></script>
      <script type="text/javascript" src="../bin/assets/js-core/modernizr.js"></script>
      <script type="text/javascript" src="../bin/assets/js-core/jquery-cookie.js"></script>
			<script type="text/javascript" src="../bin/assets/widgets/datepicker/datepicker.js"></script>
			<script type="text/javascript" src="../bin/assets/widgets/spinner/spinner.js"></script>




			<script type="text/javascript" src="../bin/assets/widgets/uniform/uniform.js"></script>
	    <script type="text/javascript" src="../bin/assets/widgets/uniform/uniform-demo.js"></script>
	    <script type="text/javascript" src="../bin/assets/widgets/chosen/chosen.js"></script>









      <script type="text/javascript">$(window).load(function(){
            setTimeout(function() {
                $('#loading').fadeOut( 400, "linear" );
            }, 300);
        });</script>
      </head>

      <body>
        <div id="sb-site">
          <div>${html}</div>
        </div>
          <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
          </script>


    	<!-- jQuery first, then Bootstrap JS. -->


      <script type="text/javascript" src="../bin/assets/widgets/skycons/skycons.js"></script>
      <script type="text/javascript" src="../bin/assets/widgets/datatable/datatable.js"></script>
      <script type="text/javascript" src="../bin/assets/widgets/datatable/datatable-bootstrap.js"></script>
      <script type="text/javascript" src="../bin/assets/widgets/datatable/datatable-tabletools.js"></script>
      <script type="text/javascript">/* Datatables basic */

        $(document).ready(function() {
            $('#datatable-example').dataTable();
        });

        /* Datatables hide columns */

        $(document).ready(function() {
            var table = $('#datatable-hide-columns').DataTable( {
                "scrollY": "300px",
                "paging": false
            } );

            $('#datatable-hide-columns_filter').hide();

            $('a.toggle-vis').on( 'click', function (e) {
                e.preventDefault();

                // Get the column API object
                var column = table.column( $(this).attr('data-column') );

                // Toggle the visibility
                column.visible( ! column.visible() );
            } );
        } );

        /* Datatable row highlight */

        $(document).ready(function() {
            var table = $('#datatable-row-highlight').DataTable();

            $('#datatable-row-highlight tbody').on( 'click', 'tr', function () {
                $(this).toggleClass('tr-selected');
            } );
        });



        $(document).ready(function() {
            $('.dataTables_filter input').attr("placeholder", "Search...");
        });


				$(function() {
		            var toc = $("#tocify-menu").tocify({context: ".toc-tocify", showEffect: "fadeIn",extendPage:false,selectors: "h2, h3, h4" });
		        });
		        jQuery(document).ready(function($) {

		        /* Sticky bars */

		        $(function() { "use strict";

		            $('.sticky-nav').hcSticky({
		                top: 50,
		                innerTop: 50,
		                stickTo: 'document'
		            });
							});
		        });


						$(function() { "use strict";
						        $('.bootstrap-datepicker').bsdatepicker({
						            format: 'mm-dd-yyyy'
						        });
						    });

								$(function() { "use strict";
        $(".spinner-input").spinner();
    });</script>

				</script>


				<script type="text/javascript" src="../bin/assets/widgets/sticky/sticky.js"></script>
        <script type="text/javascript" src="../bin/assets/widgets/tocify/tocify.js"></script>


        <script type="text/javascript" src="../bin/assets/widgets/charts/sparklines/sparklines.js"></script>
        <script type="text/javascript" src="../bin/assets/widgets/charts/sparklines/sparklines-demo.js"></script>
        <link rel="stylesheet" type="text/css" href="../bin/assets/widgets/owlcarousel/owlcarousel.css">
        <script type="text/javascript" src="../bin/assets/widgets/owlcarousel/owlcarousel.js"></script>
        <script type="text/javascript" src="../bin/assets/widgets/owlcarousel/owlcarousel-demo.js"></script>



	<script type="text/javascript" src="../bin/assets/widgets/tabs/tabs.js"></script>
  <script type="text/javascript" src="../bin/assets/widgets/dropdown/dropdown.js"></script>
  <script type="text/javascript" src="../bin/assets/widgets/tooltip/tooltip.js"></script>
  <script type="text/javascript" src="../bin/assets/widgets/popover/popover.js"></script>
  <script type="text/javascript" src="../bin/assets/widgets/progressbar/progressbar.js"></script>
  <script type="text/javascript" src="../bin/assets/widgets/button/button.js"></script>
  <script type="text/javascript" src="../bin/assets/widgets/collapse/collapse.js"></script>
  <script type="text/javascript" src="../bin/assets/widgets/superclick/superclick.js"></script>
  <script type="text/javascript" src="../bin/assets/widgets/input-switch/inputswitch-alt.js"></script>
  <script type="text/javascript" src="../bin/assets/widgets/slimscroll/slimscroll.js"></script>
  <script type="text/javascript" src="../bin/assets/widgets/slidebars/slidebars.js"></script>
  <script type="text/javascript" src="../bin/assets/widgets/slidebars/slidebars-demo.js"></script>
  <script type="text/javascript" src="../bin/assets/widgets/charts/piegage/piegage.js"></script>
  <script type="text/javascript" src="../bin/assets/widgets/charts/piegage/piegage-demo.js"></script>
  <script type="text/javascript" src="../bin/assets/widgets/screenfull/screenfull.js"></script>
  <script type="text/javascript" src="../bin/assets/widgets/content-box/contentbox.js"></script>
  <script type="text/javascript" src="../bin/assets/widgets/material/material.js"></script>
  <script type="text/javascript" src="../bin/assets/widgets/material/ripples.js"></script>
  <script type="text/javascript" src="../bin/assets/widgets/overlay/overlay.js"></script>
  <script type="text/javascript" src="../bin/assets/js-init/widgets-init.js"></script>
  <script type="text/javascript" src="../bin/assets/themes/admin/layout.js"></script>
	<script src="../bin/app.bundle.js"></script>
</div>
</body>
</html>
    `
}

export default router;
