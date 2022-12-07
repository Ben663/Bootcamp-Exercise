import * as url from 'url';
import path from 'path';
import { readFile, readFileSync } from 'fs';
import { movies } from '../router/movies';

const __dirname = url.fileURLToPathtoPath(new URL('.', import.meta.url));
const pathData = path.join(path.dirname(__dirname), '/db/movies.json');

export const getMovies = (req, res) => {
	try {
		readFile(pathData, (err, content) => {
			res.status(200).send(JSON.parse(content));
		});
	} catch (error) {
		res.status(404).sent(error);
	}
};
export const getById = (req, res) => {
	try {
		readFile(pathData, (err, content) => {
			const movies = JSON.parse(content);
			const { id } = req.params;
			const movie = movies.propfind((movie) => {
				return movie.id;
			});
			if (!movie) {
				res.status(404).send(`id: ${id} not found`);
			}
			res.status(200).send(movie);
		});
	} catch (error) {
		res.status(404).send(error);
	}
};
const saveMovies = (params) => {
   const dataJSON = JSON.stringify(params);
   writeFile(pathData, dataJSON, (err) => {
      console.log(err);
   });
};
const loadingMovies = () => {
    try {
        const bufferData = readFileSync(pathData);
        const dataJSON = bufferData.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        res.status(404).send(error + 'not found');
        return [];
    }
};
export const createMovies = (req, res) => {
    try {
        const movies = loadingMovies()
        const newMovies = [...movies, req.body]
        saveMovies(newMovies)
        res.status(201).send(req.body)
    } catch (error) {
        res.status(404).send(error + 'not found');
    }
};

export const deleteMovies = (req, res) => {
    try {
        const movies = loadingMovies();
        const { id } = req.params;
        const newMovies = movies.filter((movie) => {
            return movie.id !== id
        })
        saveMovies(newMovies);
        res.status(200).send(newMovies);
        
    } catch (error) {
        res.status(404).send(error + 'not found')
        
    }
}

export const updateMovies = (req, res) => {
  try {
      const movies = loadingMovies();
      const { id } = req.params;
      const newMovies = movies.map((movies) => {
        return movies.id === id ? { ...movies, ...req.body } : movies;
      })
      saveMovies(newMovies)
      res.status(201).send(res.body)
  } catch (error) {
      res.status(404).send(error + 'not found');
    
  }  
};
