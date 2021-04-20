import { addNewMovies, getMovies, getMoviesWithID, updateMovies, deleteMovies } from '../controllers/NMcontrollers.js';

const route = (app) => {

app.route('/api/Movies')
.get(getMovies)

.post(addNewMovies)


app.route('/api/Movies/:MoviesID')

.get(getMoviesWithID)

.put(updateMovies)


.delete(deleteMovies)


}


export default route;