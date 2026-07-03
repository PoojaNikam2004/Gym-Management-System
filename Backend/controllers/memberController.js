export  const getMembers = (req,res) => {
    res.json({massage:"get members route is working"});


    export const getMembersById =(req,res)=>{
        res.json({massage:`get members by id route is working ${req.params.id}`});
    }
    
}

export const addMembers=(req,res)=>{
    res.json({massage:"add members route is working",  data:req.body});
  
}


export const updateMembers =(req,res)=>{
    res.json({massage:`update members ${req.params.id} working`,data:req.body});

    
}


export const deleteMembers =(req,res)=>{
    res.json({massage:`delete members ${req.params.id} working`,data:req.body});
}
