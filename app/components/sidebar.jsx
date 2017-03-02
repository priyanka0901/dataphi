'use strict';

import React from 'react';

const Sidebar = React.createClass({
    handleKeyPress:function(){
        $("#search-criteria").on("keyup", function() {
        var g = $(this).val().toLowerCase();
        $(".sidebar__name label").each(function() {
        var s = $(this).text().toLowerCase();
        $(this).closest('.sidebar__name')[ s.indexOf(g) !== -1 ? 'show' : 'hide' ]();
    });
});
    },

    render:function(){
        return(
            <div className="sidebar">
                <form>
                    <input id="search-criteria" className="search" type="text" name="search" placeholder="search..." onKeyPress={this.handleKeyPress} />
                </form>
                <div className="sidebar__name">
                    <label htmlFor="check"> James </label>
                </div>
                <div className="sidebar__name">
                    <label htmlFor="check"> alax </label>
                </div>
                 <div className="sidebar__name">
                    <label htmlFor="check"> sammmer </label>
                </div>
            </div>
        );
    }
});

export default Sidebar;