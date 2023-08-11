const db = require('../util/database');

exports.home = (req,res,next)=>{
    res.send(`
        <p>
            <a href="/get">Show Details</a>
        </p>

        <p>
            <a href="/form">Enter Details</a>
        </p>
    `);
}

exports.getUser = (req,res,next)=>{
    db.execute('select * from user')
    .then((result)=>{
        const userData = result[0];
        res.json(userData);
    })
    .catch(err=>console.log(err));
}

exports.form = (req,res,next)=>{
    res.send(`
    
    <form action="/submit" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br><br>
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br><br>
        
        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" required><br><br>
        
        <input type="submit" value="Submit">
    </form>
    
    `);
}

exports.submitUser = (req,res,next)=>{

    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    

    db.execute('insert into user (name,email,phone) values (?,?,?)',[name,email,phone])
    .then((result)=>{

        console.log("data inserted successfully");
        res.redirect('/');
        
    })
    .catch((err)=>{
        console.log(err);
    });

}


exports.deleteUser = (req,res,next)=>{
    const id = req.params.id ;
    db.execute('delete from user where id= ? ', [id])
    .then(()=>{
       console.log('User deleted Successfully');
        res.send('/');
    })
    .catch();
}

