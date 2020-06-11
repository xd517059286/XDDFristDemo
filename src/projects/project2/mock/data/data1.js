var data = [
  {
    id:1,
    name:'shawn',
    age:'23',
    job:'前端工程师'
  },
  {
    id:2,
    name:'april',
    age:'18',
    job:'后端工程师'
  }
]
export default [
  {
    url:'/hello/demo',
    type:'get',
    response:config=>{
      return {
        status:200,
        message:'success',
        data:data
      }
    }
  },
  {
    url:'/hello/demo1',
    type:'post',
    response:config=>{
      return {
        status:200,
        message:'success',
        data:123
      }
    }
  }
]
