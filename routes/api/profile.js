import { Router } from "express";
import auth from "../../middleware/auth.js";
import profileController from "../../controllers/profileController.js";
import { check } from "express-validator";

const router = Router();

/**
* @route       GET api/profile
* @description Get all profiles
* @access      Public
*/
router.get('/', profileController.getAllProfiles)

/**
 * @route       GET api/profile/user/:user_id
 * @description Get profile by user id
 * @access      Public
 */
router.get('/user/:user_id', auth, profileController.getProfileByUserID);

/**
 * @route       GET api/profile/me
 * @description Get current users profile
 * @access      Private
 */
router.get('/me', auth, profileController.getProfile);

/**
 * @route       POST api/profile
 * @description Create or update user profile
 * @access      Private
 */
router.post('/', [auth, [
    check('status', 'Status is required').not().isEmpty(),
    check('skills', 'Skills is required').not().isEmpty()
]], profileController.postAddProfile);

/**
 * @route       DELETE api/profile
 * @description Delete profile, user & posts
 * @access      Private
 */
router.delete('/', auth, profileController.deleteProfile);

/**
 * @route       PUT api/profile/experience
 * @description Add profile experience
 * @access      Private
 */
router.put('/experience', [auth, [
    check('title', 'Title is required').not().isEmpty(),
    check('company', 'Company is required').not().isEmpty(),
    check('from', 'From is required').not().isEmpty()
]], profileController.updateProfileExperience);

/**
 * @route       DELETE api/profile/experience/:exp_id
 * @description Delete experience from profile
 * @access      Private
 */
router.delete('/experience/:exp_id', auth, profileController.deleteProfileExperience);

/**
 * @route       PUT api/profile/education
 * @description Add profile education
 * @access      Private
 */
router.put('/education', [auth, [
    check('school', 'School is required').not().isEmpty(),
    check('degree', 'Degree is required').not().isEmpty(),
    check('fieldofstudy', 'Field of study is required').not().isEmpty(),
    check('from', 'From is required').not().isEmpty()
]], profileController.updateProfileEducation)

/**
 * @route       DELETE api/profile/education/:edu_id
 * @description Delete education from profile
 * @access      Private
 */
router.delete('/education/:edu_id', auth, profileController.deleteProfileEducation);

/**
 * @route       GET api/profile/github/:username
 * @description Get user repos from Github
 * @access      Public
 */
router.get('/github/:username', profileController.getProfileGithub);

export default router;