const styles ={

 taskContainer:{
   justifyContent:'center',
   display:'flex'

 },
  taskWrapper:{
    marginBottom: 12,
    width: '80%',
    alignSelf:'center',
    textAlign:'center',
    borderRadius: 4,
    display:'flex',
    justifyContent:'space-between',
    boxShadow:'0 10px 15px 15px rgba(0,0,0,0.1)',

  },
  task:{
    alignItem:'right',
    textDecoration:'none',
    paddingLeft: 20,
    fontSize: 20
  },
  iconWrapper:{
    paddingTop: 20,

  },
  completedIcon:{
    fontSize: 20,
    color:'springgreen'
  },
  deletedIcon:{
    paddingLeft: 10,
    paddingRight: 20,
    fontSize: 20,
    color:'red'
  }
}

export default styles