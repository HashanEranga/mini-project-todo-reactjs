class TodoModel {
    constructor(id, title, completed=false){
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
}

export default TodoModel;