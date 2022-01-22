import { Router } from "express";
import auth from "../../middleware/auth.js";
import { check } from "express-validator";
import PostsController from "../../controllers/PostsController.js";
const router = Router();

/**
 * @route       POST api/posts
 * @description Create a post
 * @access      Private
 */
router.post('/', [ auth, [
    check('text', 'Text is required').not().isEmpty()
]], PostsController.addPost);

/**
 * @route       GET api/posts
 * @description Get all posts
 * @access      Private
 */
router.get('/', auth, PostsController.getAllPosts);

/**
 * @route       GET api/posts/:id
 * @description Get posts by id
 * @access      Private
 */
router.get('/:id', auth, PostsController.getPostById);

/**
 * @route       DELETE api/posts/:id
 * @description Delete a post
 * @access      Private
 */
router.delete('/:id', auth, PostsController.deletePost);

/**
 * @route       PUT api/posts/like/:id
 * @description Like a post
 * @access      Private
 */
router.put('/like/:id', auth, PostsController.likePost);

/**
 * @route       PUT api/posts/unlike/:id
 * @description UnLike a post
 * @access      Private
 */
router.put('/unlike/:id', auth, PostsController.unLikePost);

/**
 * @route       POST api/posts/comment/:id
 * @description Create a comment
 * @access      Private
 */
router.post('/comment/:id', [ auth, [
    check('text', 'Text is required').not().isEmpty()
]], PostsController.addComment);

/**
 * @route       DELETE api/posts/comment/:id/:comment_id
 * @description Delete a comment
 * @access      Private
 */
router.delete('/comment/:id/:comment_id', auth, PostsController.deleteComment);


export default router;