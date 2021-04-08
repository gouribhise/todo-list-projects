import React from 'react';

const TodoItem = ({items,removeItem,editItem}) => {
  return<div>  {
        items.map((item) => {
            const {list_item } = item
            //console.log(list_item)
            return<div className="container">
            <div className="row items" id={item.id}>              
                <div className="col-6">
                    <p>{list_item}</p>
                </div>
                <div className="col-2">
                      <button type="button"
                              className="btn btn-danger btn-sm"
                              onClick={() => removeItem(item.id)}>
                            Delete
                        </button>
                </div>
                <div className="col-2">
                        <button type="button"
                            className="btn btn-info btn-sm"
                            onClick={() => editItem(item.id)}>
                            Edit
                        </button>
                </div>
         
            </div> 
        </div>
         })
            
        }
       
       </div> 
}

export default TodoItem