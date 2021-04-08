import React, {useState,useEffect} from 'react'
import TodoItem from './TodoItem';
import Alert from './alert';

const getLocalStorage = () => {
    let list=localStorage.getItem('list');
    if(list){
      return JSON.parse(localStorage.getItem('list'))
    }
    else{
      return [];
    }
}

const TodoList = () => {
    const [item, setItem] = useState('')
    const [list, setList] = useState(getLocalStorage);
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState();
    const [alert,setAlert]=useState({show:false,msg:'',type:''})

    //console.log("what's inside list", list);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        //if there is no text inside item box
        if (!item) {
            showAlert(true,'danger','please enter value')
 
             }
        else if(item && isEditing){
            //deal with editing
            setList(list.map((litem)=>{
              if(litem.id===editId){
                return{...litem,list_item:item}
              }
              return litem
            }))
            setItem('');
            setEditId(null);
            setIsEditing(false);
            showAlert(true,'info','value change');
        }
        //when text is added and submited add it to localstorage list
        else {
            const newItem = { id: new Date().getTime().toString(), list_item: item };
            setList([...list, newItem]);
            setItem('');
            showAlert(true,'success','item added to the list')
        }
    }
    
    const showAlert=(show=false,type='',msg='')=>{
        setAlert({show,type,msg});
      }

     useEffect(()=>{
        localStorage.setItem('list',JSON.stringify(list))
     }, [list])
    
    const removeItem = (id) => {
        setList(list.filter((item) => item.id !== id))
        showAlert(true,'danger','item deleted from the list')

    }

    const editItem = (id) => {
        //console.log("editing item number:", id);
        const speicificItem = list.find((item) => item.id === id)
        //console.log("editing itme:",speicificItem)
        setItem(speicificItem.list_item);
        setEditId(id)
        setIsEditing(true)

        
    }
    return (
        <div className="container">
            {
                alert.show &&
                <Alert {...alert} removeAlert={showAlert}
                    list={list} />
            }

            <form onSubmit={handleSubmit} style={{marginTop:"30px"}}>
                <div>
                    <input type="text"
                           placeholder="Enter Item"
                           value={item}
                           onChange={(e)=>setItem(e.target.value)} />
                    <button style={{ marginLeft: "10px", backgroundColor: "#ffa23b" }}
                            type="submit"
                            className="btn btn-sm btn-primary">
                           {/* if is editing true change text of button*/}
                           {isEditing?'Edit Item':'Add Item'}
                     </button>
                 </div>
                
             </form>
            <br/>
            {list.length > 0 && (
              
                    <TodoItem items={list}
                             removeItem={removeItem}
                             editItem={editItem}/>
                  
                 
            )}
            </div>
    )
}

export default TodoList