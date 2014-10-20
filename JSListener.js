/*
 <AUTHOR: Jake Hilton, jake@gearsandcogs.com
 Copyright (C) 2014, Gears and Cogs.

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.

 VERSION: 1.0.0
 */

function JSListener() {
    var listener = {};

    listener.addListener = function(s_function,s_listenFor)
    {
        if(!this[s_listenFor])
            this[s_listenFor]=[];

        if(!s_function)
        {
            console.error('addListener: Non-existent method specified');
            return;
        }

        for(var i in this[s_listenFor])
            if(this[s_listenFor][i] == s_function)
                return;

        this[s_listenFor].push(s_function);
    };

    listener.removeListener = function(s_function,s_listenFor)
    {
        for(var i in this[s_listenFor])
            if(this[s_listenFor][i].toString() == s_function.toString())
                this[s_listenFor].splice(1,i);
    };

    listener.callListeners = function(s_identifier)
    {
        if(!this[s_identifier])
            return;

        var args = Array.prototype.slice.call(arguments);
        var n_length=this[s_identifier].length;

        for(var i=0;i<n_length;i++)
            this[s_identifier][i].apply(this,args.slice(1));
    };

    return listener;
}