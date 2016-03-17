angular.module('starter.controllers', [])

.config(function($compileProvider){
$compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|file|blob|cdvfile|content):|data:image\//);
})

.controller('CameraCtrl', function($scope, $cordovaCamera) {
  /* $scope.takePhoto = function() {
         Camera.getPicture().then(function(imageURI) {
              console.log(imageURI);
              $scope.lastPhoto = imageURI;
              $scope.ImageURI =  imageURI;
         //     UploadPicture(imageURI);
         }, function(err) {
            console.err(err);
         }, {
             quality: 75,
             allowEdit : true,
             saveToPhotoAlbum: true
         });
    }

  $scope.ShowPictures = function(){
                navigator.camera.getPicture(  UploadPicture, function(message) {
                                },{
                                quality: 75,
                                destinationType: navigator.camera.DestinationType.FILE_URI,
                                sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
                            }
               );
  }*/
 /* document.addEventListener("deviceready", onDeviceReady, false);

  function onDeviceReady() {

      console.log("getIn DeviceReady");
      $scope.takePhoto = function() {
            var options = {
              quality: 50,
              destinationType: Camera.DestinationType.DATA_URL,
              sourceType: Camera.PictureSourceType.CAMERA,
              allowEdit: true,
              encodingType: Camera.EncodingType.JPEG,
              targetWidth: 100,
              targetHeight: 100,
              popoverOptions: CameraPopoverOptions,
              saveToPhotoAlbum: true,
              correctOrientation:true
            };
            console.log("getIn TakePhoto");

            $cordovaCamera.getPicture(options).then(function(imageData) {
              var image = document.getElementById('myImage');
              image.src = "data:image/jpeg;base64," + imageData;
              console.log("getPicture Now");
            }, function(err) {
              // error
            });
      }
  }*/

                  $scope.takePhoto = function () {
                    var options = {
                      quality: 75,
                      allowEdit: true,
                      encodingType: Camera.EncodingType.JPEG,
                      saveToPhotoAlbum: true
                  };
                   console.log("getIn TakePhoto");

                      $cordovaCamera.getPicture(options).then(function (imageData) {
                          console.log("getPicture Now");
                          $scope.imgURI = "data:image/jpeg;base64," + imageData;
                      }, function (err) {
                          console.log("getPicture Error");
                          // An error occured. Show a message to the user
                      });
                  }

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
