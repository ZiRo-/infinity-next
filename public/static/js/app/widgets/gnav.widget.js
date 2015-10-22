// ============================================================
// Purpose                      : Global navigation
// Contributors                 : jaw-sh
// ============================================================

ib.widget("gnav", function(window, $, undefined) {
	var widget = {
		
		defaults : {
			selector : {
				'class-open'  : "flyout-open",
				
				'flyout'      : ".flyout",
				'flyout-link' : ".gnav-link[data-item]"
			}
		},
		
		// Events
		events   : {
			anyClick  : function(event) {
				// Close ally open flyouts.
				var $flyouts = $("."+widget.options.selector['class-open']);
				
				$flyouts.each(function() {
					if (!$(event.target).closest(this).length)
					{
						$(this).removeClass(widget.options.selector['class-open']);
					}
				});
			},
			
			itemClick : function(event) {
				event.stopPropagation();
				
				var $link    = $(this);
				var item     = $link.attr('data-item');
				var $flyout  = $("#flyout-"+item);
				
				if ($flyout.length > 0)
				{
					if ($flyout.is("."+widget.options.selector['class-open']))
					{
						
					}
					else
					{
						$flyout.addClass(widget.options.selector['class-open']);
						event.preventDefault();
						return false;
					}
				}
			},
		},
		
		// Event bindings
		bind     : {
			widget : function() {
				$(window)
					.on( 'click', widget.events.anyClick )
				;
				
				widget.$widget
					.on( 'click', widget.options.selector['flyout-link'], widget.events.itemClick )
				;
				
				$(widget.options.selector['flyout-link'], widget.$widget)
					.attr('data-no-instant', "true");
			}
		}
		
	};
	
	return widget;
});
