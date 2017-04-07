import firebase from '../../store/../firebase/firebase';

export class todoAction{
    static ADDTODO = "ADDTODO";
    static GETTODO = "GETTODO";

    static addTodo(){
        return{ type: todoAction.ADDTODO }
    }

    static addToFirebase(todo){
        var rootRef = firebase.database().ref().child("todo/").push(todo);
        console.log("data pushed");
        return (dispatch)=>{
            rootRef.then(()=>{
                dispatch(todoAction.addTodo());
            });
        }
    }

    
    static getTodo(data){
        return { type :todoAction.GETTODO, payload: data }
    }

    static fetchData(id) {
        return(dispatch)=>{
            var getData = firebase.database().ref().child("todo/");
            getData.on('value',(snapshot)=>{
                var arr = [];
                var obj = snapshot.val();
                for(var key in obj){
                    obj.id = key;
                    arr.push(obj[key]);
                    // console.log(obj.id);
            }
                dispatch(todoAction.getTodo(arr));
            })
        }
    }
    
    //Progressing
    static deleteNode(){
        return(dispatch)=>{
            var getData = firebase.database().ref().child("todo/");
            getData.on('value',(snap)=>{
             console.log(snap.key);
            })
        }
    }

}