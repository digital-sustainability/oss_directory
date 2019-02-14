module.exports = async function (req, res, next) {

        //TODO: sync conventions with frontend and database
        //Like in db only allow lowercase entries and frontend send only lowercase requests
        let path = req.path.toLowerCase();
        let method = req.method.toLowerCase();
        let action = 
                await Action.findOne({path: path, method: method}).populate('permission'); 

        if (!action) 
        {
                return next();

                //log that no action is defined!!
        }

        //in order to be authorized a user has to be logged in
        if (!req.isAuthenticated())
        {
                res.status(401).json();
        }

        let user = 
                await User.findOne({id: req.user.id}).populate('role');

        let user_role = 
                await Role.findOne({id : user.role.id}).populate('permissions');

        if (user_role.name == "admin")
        {
                return next();
        }

        //TODO: rework this (could be better)
        for(let i = 0; i < action.permissions.length; i++ )
        {
                let pass = false;
                for (let j = 0; j < user_role.permissions.length; j++)
                {
                        if (action.permissions[i].id == user_role.permissions[j].id)
                        {
                                pass = true;
                        }
                }
                if (!pass)
                {
                        res.status(403).json(); //403 forbidden user does not have the privileges
                }
        }  
        return next();
}
