const adminEmail = "conquestokoh@gmail.com";

const FirebaseDBRules = {

"/admin":{

"/reports":{
write:"authenticated users",
read:admin
},

"/analytics":{
write:"authenticated users",
read:admin
}

},


"/courses":{
write:admin,
read:"authenticated users",
},

"/metadata":{
write:admin,
read:"authenticated users",
},

"/comments":{

"/$comment":{
read:"authenticated users",
write:"authenticated users",
delete:"if $comment.uid matches auth.uid",
}

},

"/replies":{

"/$reply":{
read:"authenticated users",
write:"authenticated users",
delete:"if $reply.uid matches auth.uid",
}

},

"/notifications":{

"/$user_id":{
read:"$user_id.matches auth.uid",
write:"authenticated users",
}

},

"/users":{

"/$user_id":{ 
read:"$user_id.matches auth.uid",
write:"$user_id.matches auth.uid",
}

},

"/leaderboard":{

"/$user_id":{ 
read:"authenticated users",
write:"$user_id.matches auth.uid",
}

},

"/$user1_$user2":{
read:"$user1_$user2.split('_').contains(auth.uid)",
write:"$user_id.matches auth.uid",
},

"/group-$group":{
read:"$group.members.contains(auth.uid)",
write:"$group.members.contains(auth.uid)",
"messages":{

}
},

"/user-info":{

"/$user_id":{ 
read:"authenticated users",
write:"$user_id.matches auth.uid",
}

},


};