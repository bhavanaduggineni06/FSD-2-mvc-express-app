import Movie from '../models/movieModel.js';
const createMovies = (req,res)=> {
    const newMovies = new Movie(req.body);
    newMovies.save().then((result)=> {
        res.status(201).json({message:"Movie created successfully",data:result});
    })
    .catch((err)=> {
        res.status(500).json({message:"Problem while creating movie",error:err.message});
    });
};
const readMovies=(req,res)=> {
    const {category}=req.query;
    const filter=category?{category}:{};
    Movie.find(filter).then((result)=> {
        res.status(200).json({message:"Movies fetched successfully",data:result});
    })
    .catch((err)=> {
        res.status(500).json({message:"Problem while retreiving movies",error:err.message});
    });
};
const readMovieById=(req,res)=> {
    const {id}=req.params;
    Movie.findById(id).then((result)=> {
        if(!result) {
            const error=new Error("Movie not found");
            error.status=404;
            throw error;
        }
        res.status(200).json({message:"Movies retrieved successfully",data:result});
    })
    .catch((err)=> {
        res.status(500).json({message:"Problem while retreiving movie",error:err.message});
    });
};
const updateMovieById=(req,res)=> {
    const {id}=req.params;
    const updateData=req.body;
    Movie.findByIdAndUpdate(id,updateData,{new:true}).then((result)=> {
        if(!result) {
            const error=new error("Movie not found");
            error.status=404;
            throw error;
        }
        res.status(200).json({message:"Movie updated successfully",data:result});
    });
};
const deleteMovieById=(req,res)=> {
    const {id}=req.params;
    Movie.findByIdAndDelete(id).then((result)=> {
        if(!result) {
            const error=new error("Movie not found");
            error.status=404;
            throw error;
        }
        res.status(200).json({message:"Movie deleted successfully",data:result});
    })
    .catch((err)=> {
        res.status(500).json({message:"Problem while deleting movie",error:err.message});
    });
};
export {createMovies, readMovieById, readMovies, updateMovieById, deleteMovieById};