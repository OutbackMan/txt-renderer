import TxtEngine from "./lib/TxtEngine.js";

export default class SpriteEditor extends TxtEngine {
  constructor(canvas_dom_elem, width, height, default_bg, default_fg, default_ch) {
    super(canvas_dom_elem, width, height, default_bg, default_fg, default_ch);

    let move_label = create_label(3, 4, "MOVE"); 
    let brush_label = create_label(3, 4, "MOVE"); 
    let erase_label = create_label(3, 4, "MOVE"); 
    let zoom_in_label = create_label(3, 4, "MOVE"); 
    let zoom_out_label = create_label(3, 4, "MOVE"); 
    let undo_label = create_label(3, 4, "MOVE"); 
    let redo_label = create_label(3, 4, "MOVE"); 
    let cut_label = create_label(3, 4, "MOVE"); 
    let copy_label = create_label(3, 4, "MOVE"); 
    let paste_label = create_label(3, 4, "MOVE"); 
    let output_label = create_label(3, 4, "MOVE"); 
    let load_label = create_label(3, 4, "MOVE"); 

  }	

  update(delta_time) {
	this._render_base_gui();
    
	this.labels.forEach((label) => {
	  label.handle_hover();
      if (typeof label.handle_touch !== "undefined") {
	    label.handle_touch();	  
	  }
	});
  }

  _render_base_gui() {
	  
  }

  _create_touchable_label(x, y, txt, bg_color, fg_color, touch_callback) {
    let label = this._create_static_label(x, y, txt, bg_color, fg_color);
	label.handle_touch = () => {
      if (this.input.pointer.has_touched) {
		if (this.input.pointer.x >= label.x && this.input.pointer.x < label.txt.length &&
		     this.input.pointer.y == label.y) {
	      touch_callback();
		}
	  }
	};
  }

  _create_static_label(x, y, txt, bg_color, fg_color) {
    let label = Object.create(null);
    label.txt = txt;
    label.bg_color = bg_color;
    label.fg_color = fg_color;

    label.handle_hover = () => {
	  if (this.input.pointer.x >= label.x && this.input.pointer.x < label.txt.length &&
		this.input.pointer.y == label.y) {
	     this.render_str(label.x, label.y, lighten(label.bg_color, 0.3), lighten(label.fg_color, 0.3));
	  }
	};

    return label;
  }

}

}
