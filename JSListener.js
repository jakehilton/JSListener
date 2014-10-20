function JSListener() {
    var listener = {};

    listener.addListener = function(s_function,s_listenFor)
    {
        if(!this[s_listenFor])
            this[s_listenFor]=new Array();

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