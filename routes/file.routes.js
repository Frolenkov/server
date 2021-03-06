const Router = require('express');
const router = new Router();
const authMiddleware = require('../middleware/auth.middleware');
const fileController = require('../controllers/fileController')

router.post('', authMiddleware, fileController.createDir);
router.post('/upload', authMiddleware, fileController.uploadFile);
router.get('', authMiddleware, fileController.getFiles);
router.get('/download', authMiddleware, fileController.downloadFile);
router.delete('/delete', authMiddleware, fileController.deleteFile);
router.get('/search', authMiddleware, fileController.searchFile);
router.post('/avatarUpload', authMiddleware, fileController.uploadAvatar);
router.delete('/avatarDelete', authMiddleware, fileController.deleteAvatar);

module.exports = router;