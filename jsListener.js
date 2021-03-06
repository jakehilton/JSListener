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

 VERSION: 1.0.1
 */

function JSListener() {
    var listener = {
        callObj: {}
    };

    listener.addListener = function (s_listenFor, s_function) {
        if (!this.callObj[s_listenFor])
            this.callObj[s_listenFor] = [];

        if (!s_function)
        {
            if(console && console.error)
                console.error('addListener: Non-existent method specified');
            return;
        }

        for (var i in this.callObj[s_listenFor])
            if (this.callObj[s_listenFor][i] == s_function)
                return;

        this.callObj[s_listenFor].push(s_function);
    };

    listener.removeListener = function (s_listenFor, s_function) {
        for (var i in this.callObj[s_listenFor])
            if (this.callObj[s_listenFor][i] == s_function) {
                this.callObj[s_listenFor].splice(i, 1);

                if (this.callObj[s_listenFor].length == 0)
                    delete this.callObj[s_listenFor];

            }
    };

    listener.callListeners = function (s_identifier) {
        if (!this.callObj[s_identifier])
            return;

        var args = Array.prototype.slice.call(arguments);
        var n_length = this.callObj[s_identifier].length;

        for (var i = 0; i < n_length; i++)
            this.callObj[s_identifier][i].apply(this, args.slice(1));
    };

    return listener;
}