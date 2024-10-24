import { TodoModel } from "../models/todo.js"
import { addTodoValidator, updateTodoValidator } from "../validators/todo.js";


export const addTodo = async (req, res, next) => {
    try {
        console.log(req.query)
        // Validate user inputs
        
        const { error, value } = addTodoValidator.validate({
            ...req.body,
            icon: req.file?.filename 
        });
        if (error) {
            return res.status(422).json(error);
        }

        // Write todo to database
        await TodoModel.create(value);
        // Respond to request
        res.status(201).json('Todo was added');
    } catch (error) {
        next(error);
    }


}

export const getTodos = async (req, res, next) => {
    try {
        const {filter = "{}",sort="{}", limit = 10, skip = 0 } = req.query;
        // fetch todos from database
        const todos = await TodoModel
        .find(JSON.parse(filter))
        .sort(JSON.parse(sort))
        .limit(limit)
        .skip(skip);
        // return response
        res.json(todos
        );
    } catch (error) {
        next(error);
    }
}


// export const getAdverts = async (req, res, next) => {
//     try {
//         const {filter = "{}",sort="{}", limit = 10, skip = 0 } = req.query;
//         // fetch todos from database
//         const todos = await TodoModel
//         .find(JSON.parse(filter))
//         .sort(JSON.parse(sort))
//         .limit(limit)
//         .skip(skip);
//         // return response
//         res.json(todos
//         );
//     } catch (error) {
//         next(error);
//     }
// }


export const countTodos = async (req, res, next) => {
    try {
        const { filter = '()' } = req.query;
    // count todos in database
    const count = await TodoModel.countDocuments(JSON.parse(filter));
    // respond to request
    res.json({ count });
    } catch (error) {
        next(error);
    }
}


export const getTodo = async (req, res, next) => {
   try {
     const { id } = req.params;
     // get todo by id from database
     const todo = await TodoModel.findById(id);
     // respond to request
     res.json(todo);
   } catch (error) {
    next(error)
   }
}


export const updateTodo = (req, res, next) => {
    res.json('Todo update');
}

export const deleteTodo = (req, res, next) => {
    res.json('Todo deleted');
}