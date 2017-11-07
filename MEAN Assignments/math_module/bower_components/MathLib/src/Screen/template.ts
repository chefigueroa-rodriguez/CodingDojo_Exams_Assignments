var template = function (data) {var p = [];p.push(' <figure class="MathLib_figure">     <div class="MathLib_wrapper" style="width: ');
p.push(data.width);
p.push('px; height: ');
p.push(data.height);
p.push('px">   <div class="MathLib_info_message">Your browser does not seem to support WebGL.<br>   Please update your browser to see the plot.</div>  </div>      ');
if (data.figcaption) {
	p.push('   <figcaption class="MathLib_figcaption">');
p.push(data.figcaption);
p.push('</figcaption>  ');
}
p.push('  </figure>  ');
if (data.contextMenu) {
	p.push('  <div class="MathLib_contextMenuOverlay">   <menu class="MathLib_menu MathLib_mainmenu">          ');
if (data.contextMenu.screenshot) {
	p.push('     <div class="MathLib_screenshot MathLib_menuItem">Save Screenshot</div>    ');
}
p.push('      ');
if (data.contextMenu.fullscreen) {
	p.push('     <div class="MathLib_fullscreen MathLib_menuItem">      <span class="needs-nofullscreen">Enter Fullscreen</span>      <span class="needs-fullscreen">Exit Fullscreen</span>     </div>    ');
}
p.push('      ');
if (data.contextMenu.grid) {
	p.push('     <div class="MathLib_menuItem MathLib_hasSubmenu">      Grid      <menu class="MathLib_menu MathLib_submenu">       <div class="MathLib_needs2D">        <label class="MathLib_menuItem">         <input type="radio" name="MathLib_grid_type_');
p.push(data.uuid);
p.push('" class="MathLib_radio MathLib_grid_type" value="cartesian">cartesian        </label>        <label class="MathLib_menuItem">         <input type="radio" name="MathLib_grid_type_');
p.push(data.uuid);
p.push('" class="MathLib_radio MathLib_grid_type" value="polar">polar        </label>        <label class="MathLib_menuItem">         <input type="radio" name="MathLib_grid_type_');
p.push(data.uuid);
p.push('" class="MathLib_radio MathLib_grid_type" value="none">none        </label>       </div>        <div class="MathLib_needs3D MathLib_menuItem MathLib_is_disabled" style="font-size: 0.7em">        Gridoptions for 3D are coming soon.       </div>      </menu>     </div>    ');
}
p.push('      <hr class="MathLib_separator">    <div class="MathLib_is_disabled MathLib_menuItem MathLib_is_centered" style="font-size:0.83em">     Plot generated by MathLib.js    </div>   </menu>  </div> ');
}
p.push('');
return p.join('');
}