angular.module('app.controllers', [])
  
.controller('welcomeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('sLMathmaticsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('physicsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('settingsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('constantsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('sIMultipliersCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('converstionsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('circuitsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('equationsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('priorLearningCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
 
     $scope.para ={ //parallelogram scope
         
         want: '',
         area: '',
         base: '',
         height: '',
         result: '',
         
             calc: function(){
                 if (this.area == ""){
                    this.result = this.base * this.height;
                    this.want = "area = ";
                }
                 
                 else if (this.base == ""){
                    this.result = this.area / this.height;
                    this.want = "base = ";
                }
                 
                 else if(this.height == ""){
                    this.result = this.area / this.base;
                    this.want = "height = ";
                }
                 
                 else {
                    this.result = "ERROR";
                    this.want = "";
                }
            }
    };

     $scope.tri = { //triangle scope
        
         want: '',
         area: '',
         base: '',
         height: '',
         result: '',
         
             calc: function(){
                 
                 if (this.area == ""){
                     this.result = (this.base * this.height)*0.5;
                     this.want = "area = ";
                }
                 
                 else if (this.base == ""){
                     this.result = (2*this.area) / this.height;
                     this.want = "base = ";
                }
                 
                 else if(this.height == ""){
                     this.result = (2*this.area) / this.base;
                     this.want = "height = ";
                }
                 
                 else {
                     this.result = "ERROR";
                     this.want = "";
                }
            }
    };
     $scope.trap ={ //trapazoid scope
         
         want: '',
         area: '',
         baseA: '',
         baseB: '',
         height: '',
         result: '',
         
             calc: function(){
                 if (this.area === ''){
                    this.result = (Number(this.baseA) + Number(this.baseB)) * Number(this.height) * 0.5;
                    this.want = "area = ";
                }
                 
                 else if (this.baseA === ""){
                    this.result = (Number(this.area) / Number(this.height)) * 2 + Number(this.baseB);
                    this.want = "baseA = ";
                }
                 
                 else if(this.baseB === ""){
                    this.result = (Number(this.area) / Number(this.height)) * 2 + Number(this.baseA);
                    this.want = "baseB = ";
                }
                 
                  else if(this.height === ""){
                    this.result = (2 * Number(this.area)) / (Number(this.baseA) + Number(this.baseB));
                    this.want = "height = ";
                }
                
                 else {
                    this.result = "ERROR";
                    this.want = "";
                }
            }
    };
    
    $scope.Acirc ={ //circle scope
         
         want: '',
         area: '',
         radius: '',
         result: '',
         
             calc: function(){
                 if (this.area === ''){
                    this.result = Number(this.radius) * Number(this.radius) * Math.PI;
                    this.want = "area = ";
                }
                 
                 else if (this.radius === ""){
                    this.result = Math.sqrt(Number(this.area) / Math.PI);
                    this.want = "radius = ";
                }
                 
                
                 else {
                    this.result = "ERROR";
                    this.want = "";
                }
            }
    };

      $scope.Ccirc ={ //circle scope
         
         want: '',
         circumference: '',
         radius: '',
         result: '',
         
             calc: function(){
                 if (this.circumference === ''){
                    this.result = Number(this.radius) * Math.PI * 2;
                    this.want = "circumference = ";
                }
                 
                 else if (this.radius === ""){
                    this.result = (Number(this.circumference) / (2*(Math.PI)));
                    this.want = "radius = ";
                }
                 
                
                 else {
                    this.result = "ERROR";
                    this.want = "";
                }
            }
    };
    
     $scope.pyra ={ //pyramid scope
         
         want: '',
         volume: '',
         base: '',
         height: '',
         result: '',
         
             calc: function(){
                 if (this.volume === ''){
                    this.result = (Number(this.base) * Number(this.height)) * (1/3);
                    this.want = "volume = ";
                }
                 
                 else if (this.base === ""){
                    this.result = ((3 * Number(this.volume)) / Number(this.height));
                    this.want = "base = ";
                }
                 
                  else if(this.height === ""){
                    this.result = ((3 * Number(this.volume)) / Number(this.base));
                    this.want = "height = ";
                }
                
                 else {
                    this.result = "ERROR";
                    this.want = "";
                 }
            }
     };
     
     $scope.cubo ={ //cuboid scope
         
         want: '',
         volume: '',
         length: '',
         width: '',
         height: '',
         result: '',
         
             calc: function(){
                 if (this.volume === ''){
                    this.result = (Number(this.length) * Number(this.width)) * Number(this.height);
                    this.want = "volume = ";
                }
                 
                 else if (this.length === ""){
                    this.result = (Number(this.volume) / Number(this.width)) * Number(this.height);
                    this.want = "length = ";
                }
                 
                 else if(this.width === ""){
                    this.result = (Number(this.volume) / Number(this.length)) * Number(this.height);
                    this.want = "width = ";
                }
                 
                  else if(this.height === ""){
                    this.result = Number(this.volume) / (Number(this.length) * Number(this.width));
                    this.want = "height = ";
                }
                
                 else {
                    this.result = "ERROR";
                    this.want = "";
                }
            }
    };
 
    $scope.Vcyl ={ //cylinder scope
         
         want: '',
         volume: '',
         radius: '',
         height: '',
         result: '',
         
             calc: function(){
                 if (this.volume === ''){
                    this.result = Number(this.radius) * Number(this.radius) * Math.PI * Number(this.height);
                    this.want = "volume = ";
                }
                 
                 else if (this.radius === ""){
                    this.result = Math.sqrt(Number(this.area) / (Number(this.height) * Math.PI));
                    this.want = "radius = ";
                }
                 
                else if (this.height === ""){
                    this.result = Number(this.volume) / (Number(this.radius) * Number(this.radius) * Math.PI);
                    this.want = "height = ";
                }
                 
                 else {
                    this.result = "ERROR";
                    this.want = "";
                }
            }
    };

        $scope.Acyl ={ //cylinder scope
         
         want: '',
         area: '',
         radius: '',
         height: '',
         result: '',
         
             calc: function(){
                 if (this.area === ''){
                    this.result = Number(this.radius) * Math.PI * Number(this.height) * 2;
                    this.want = "volume = ";
                }
                 
                 else if (this.radius === ""){
                    this.result = (Number(this.area) / (2 * Number(this.height) * Math.PI));
                    this.want = "radius = ";
                }
                 
                else if (this.height === ""){
                    this.result = Number(this.area) / (Number(this.radius) * 2 * Math.PI);
                    this.want = "height = ";
                }
                 
                 else {
                    this.result = "ERROR";
                    this.want = "";
                }
            }
    };
}])
   
.controller('hLMathmaticsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('algebraCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

     $scope.nTermArith ={ // scope
         
         want: '',
         uN: '',
         u1: '',
         n: '',
         d: '',
         result: '',
         
            calc: function(){
                 if (this.uN === ""){
                    this.result = Number(this.u1) + (this.n - 1) * this.d;
                    this.want = "u(" + this.n + ") = ";
                }
                 
                 else if (this.u1 === ""){
                    this.result = this.uN - ((this.n - 1) * this.d);
                    this.want = "u(1) = ";
                }
                 
                 else if(this.n === ""){
                    this.result = (this.uN - this.u1)/this.d + 1 ;
                    this.want = "n = ";
                }
                 else if(this.d ===""){
                     this.result = (this.uN - this.u1)/(this.n - 1);
                     this.want = "d = ";
                 }
                 else {
                    result = "ERROR";
                    want = "";
                }
            }
    };

     $scope.sumArith = { // scope
        
         want: '',
         sN: '',
         uN: '',
         u1: '',
         n: '',
         d: '',
         result: '',
         
             calc: function(){
                
                if(this.sN === "" && this.uN === ""){
                    this.result = (this.n / 2) * ((2 * this.u1) + (this.n - 1) * this.d);
                    this.want = "S(" + this.n + ") = ";
                }
                
                else if (this.u1 === "" && this.uN === ""){
                    this.result = (((this.sN * 2) / this.n) - (this.n - 1) * this.d) / 2;
                    this.want = "u(1) = ";
                }
                
                else if (this.d === "" && this.uN === ""){
                    this.result = (((this.sN * 2) / this.n) - 2 * this.u1) / (this.n - 1);
                    this.want = "n = ";
                }
                
                else if (this.sN === ""){
                     this.result = (this.n/2) * (Number(this.u1) + Number(this.uN));
                     this.want = "S(" + this.n + ") = ";
                }
                 
                 else if (this.uN === ""){
                     this.result = (this.sN * 2) / this.n - this.u1;
                     this.want = "u(" + this.n + ") = ";
                 }
                
                 else if(this.u1 === ""){
                     this.result = (this.sN * 2) / this.n - this.uN;
                     this.want = "u(1) = ";
                }
                else if(this.n === ""){
                     this.result = this.sN * 2 / (Number(this.u1) + Number(this.uN));
                     this.want = "n = ";
                }
                 
                 else {
                     this.result = "ERROR";
                     this.want = "";
                }
            }
    };
     
     $scope.nTermGeo ={ // scope
         
         want: '',
         uN: '',
         u1: '',
         r: '',
         n: '',
         result: '',
         
             calc: function(){
                 if (this.uN === ''){
                    this.result = this.u1 * Math.pow(this.u1, (this.n - 1));
                    this.want = "u(" + this.n + ") = ";
                }
               
                 else if (this.u1 === ""){
                    this.result = this.uN / Math.pow(this.r, (this.n - 1));
                    this.want = "u(1) = ";
                }
                 
                 else if(this.r === ""){
                    this.result = Math.pow((this.uN / this.u1), (1/ (this.n - 1)));
                    this.want = "r = ";
                }
                 
                  else if(this.n === ""){
                    this.result = Math.log((this.uN / this.u1))/Math.log(this.r) + 1 ;
                    this.want = "n = ";
                }
                
                 else {
                    this.result = "ERROR";
                    this.want = "";
                }
            }
    };
    /*
     $scope. ={ // scope
         
         want: '',
         : '',
         : '',
         result: '',
         
             calc: function(){
                 if (this. == ''){
                    this.result = ;
                    this.want = " = ";
                }
                 
                 else if (this.radius == ""){
                    this.result = ;
                    this.want = " = ";
                }
                 
                
                 else {
                    this.result = "ERROR";
                    this.want = "";
                }
            }
    };

     $scope. ={ // scope
         
         want: '',
         : '',
         : '',
         result: '',
         
             calc: function(){
                 if (this. == ''){
                    this.result = ;
                    this.want = " = ";
                }
                 
                 else if (this. == ""){
                    this.result = ;
                    this.want = " = ";
                }
                 
                
                 else {
                    this.result = "ERROR";
                    this.want = "";
                }
            }
    };
    
     $scope. ={ // scope
         
         want: '',
         : '',
         : '',
         : '',
         result: '',
         
             calc: function(){
                 if (this. == ''){
                    this.result = ;
                    this.want = " = ";
                }
                 
                 else if (this. == ""){
                    this.result = ;
                    this.want = " = ";
                }
                 
                  else if(this. == ""){
                    this.result = ;
                    this.want = " = ";
                }
                
                 else {
                    this.result = "ERROR";
                    this.want = "";
                 }
            }
    */        
}])
   
.controller('functionsEquationsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

       $scope.sym = { //axis of symmetry
        x: '',
        b: '',
        a: '',
        want: '',
        result: '',
        
            calc: function(){
                if (this.x === ''){
                    if (Number(this.a) == Number(0)){
                        this.result = 'a ≠ 0';
                        this.want = '';
                    }
                    else {
                        this.result = ((-1)*Number(this.b))/(2*Number(this.a));
                        this.want = 'x = ';
                    }
                }
                else if (this.b === ''){
                    this.result = (-1)*(Number(this.x)*(2)*Number(this.a));
                    this.want = 'b = ';
                }
                else if(this.a === ''){
                    if (Number(this.x) == Number(0)){
                        this.result = 'x ≠ 0';
                        this.want = '';
                    }
                    else {
                        this.result = this.result = ((-1)*Number(this.b))/(2*Number(this.x));
                        this.want = ' a = ';
                    }
                }
                else {
                    this.result = "ERROR";
                    this.want = "";
                }
            }
        };
        $scope.quad = { //quadratic
            x: '',
            a: '',
            b: '',
            c: '',
            wantA: '',
            wantB: '',
            resultA: '',
            resultB: '',
            
            calc: function(){
                if (this.x === ''){
                    if (Number(this.a) == Number(0)){
                        this.resultA = '';
                        this.resultB = '';
                        this.wantA = "a ≠ 0";
                        this.wantB = '';
                    }
                    else if ((Math.pow(Number(this.b),2)-(4*Number(this.a)*Number(this.c))) < Number(0)){
                        this.resultA = "complex number";
                        this.resultB = 'complex number';
                        this.wantA = '';
                        this.wantB = '';
                    }
                    else {
                        this.resultA = ((-1)*Number(this.b)-Math.sqrt(Number(this.b)*Number(this.b)-4*Number(this.a)*Number(this.c)))/(2*Number(this.a))+ ' ';
                        this.resultB = ((-1)*Number(this.b)+Math.sqrt(Number(this.b)*Number(this.b)-4*Number(this.a)*Number(this.c)))/(2*Number(this.a));
                        this.wantA = 'x(1) = ';
                        this.wantB = 'x(2) = ';
                    }
                }     
                else if (this.a === ''){
                    if (Number(this.x) == Number(0)){
                        this.resultA = 'x ≠ 0';
                        this.resultB = '';
                        this.wantA = '';
                        this.wantB = '';
                    }
                    else {
                        this.resultA = ((-1)*(Number(this.x)*Number(this.b)+Number(this.c)))/Math.pow(Number(this.x),2);
                        this.resultB = '';
                        this.wantA = "a = ";
                        this.wantB = ''; 
                    }
                }
                else if (this.b === ''){
                    if (Number(this.x) == Number(0)){
                        this.resultA = 'x ≠ 0';
                        this.resultB = '';
                        this.wantA = '';
                        this.wantB = '';
                    }
                    else {
                        this.resultA = (Number(this.a)*Math.pow(Number(this.x),2) + Number(this.c))/((-1)*Number(this.x));
                        this.resultB = '';
                        this.wantA = "b = ";
                        this.wantB = '';
                    }
                }
                else if (this.c === ''){
                    this.resultA = (-1)*(Number(this.a)*Math.pow(Number(this.x),2)+Number(this.x)*Number(this.b));
                    this.resultB = '';
                    this.wantA = "c = ";
                    this.wantB = '';
                }
                else {
                    this.resultA = "ERROR";
                    this.resultB = '';
                    this.wantA = "";
                    this.wantB = '';
                }
            }
        };
        $scope.dis ={ //discriminant
            d: '',
            b: '',
            a: '',
            c: '',
            resultA: '',
            result: '',
            want: '',
            
            calc: function(){
                if (this.d === ''){
                    this.result = Math.pow(Number(this.b),2)-(4*Number(this.a)*Number(this.c));
                    this.want = "delta = ";
                }
                else if (this.b === ''){
                    this.resultA = Math.sqrt(Number(this.d)+(4*Number(this.a)*Number(this.c)));
                        if (isNaN(this.resultA)){
                            this.result = 'complex number';
                            this.want = '';
                        }
                        else {
                            this.result = this.resultA;
                            this.want = 'b = ';
                        }
                }
                else if (this.a === ''){
                    if (Number(this.c) == Number(0)){
                        this.result = '';
                        this.want = "c ≠ 0";
                    }
                    else {
                        this.result = (Number(this.d)-Math.pow(Number(this.b),2))/((-4)*Number(this.c));
                        this.want = 'a = ';
                    }
                }
                else if (this.c === ''){
                    if (Number(this.a) == Number(0)){
                        this.result = 'a ≠ 0';
                        this.want = '';
                    }
                    else {
                        this.result = (Number(this.d)-Math.pow(Number(this.b),2))/((-4)*Number(this.a));
                        this.want = 'c = ';
                    }
                }
                else {
                    this.result = "ERROR";
                    this.want = "";
                }
            }
        };
}])
   
.controller('circularFunctionsTrigCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    
    $scope.arcL = { //ar length scope
         
         want: '',
         length: '',
         angle: '',
         radius: '',
         result: '',
         
             calc: function(){
                 if (this.length === ''){
                    this.result = Number(this.angle) * Number(this.radius);
                    this.want = "length = ";
                }
                 
                 else if (this.radius === ""){
                    this.result = Number(this.length) / Number(this.angle);
                    this.want = "radius = ";
                }
                 
                else if (this.angle === ""){
                    this.result = Number(this.length) / Number(this.radius);
                    this.want = "angle = ";
                }
                    
                 else {
                    this.result = "ERROR";
                    this.want = "";
                }
            }
    };

    $scope.secA ={ //Area of a sector scope
         
         want: '',
         area: '',
         angle: '',
         radius: '',
         result: '',
         
             calc: function(){
                if (this.radius === ""){
                    this.result = Math.sqrt(2 * Number(this.area) / Number(this.angle));
                    this.want = "radius = ";
                }
                else if (this.area === ""){
                    this.result = (Number(this.angle)/2) * Math.pow(Number(this.radius),2);
                    this.want = "area = ";
                }
                    
                else if (this.angle === ""){
                    this.result = 2 * Number(this.area) / Math.pow(Number(this.radius),2);
                    this.want = "angle = ";
                }
                    
                 else {
                    this.result = "ERROR";
                    this.want = "";
                }
            }
    };

    $scope.cos ={ //cosin rule scope
         
         want: '',
         a: '',
         b: '',
         c: '',
         angleC: '',
         result: '',
         
             calc: function(){
                 if (this.angleC === ''){
                    this.result = (Math.pow(Number(this.a),2)+Math.pow(Number(this.b),2)-Math.pow(Number(this.c),2))/(2*Number(this.a)*Number(this.b));
                    this.want = "C = ";
                }
                 
                 else if (this.c === ""){
                    this.result = Math.pow(Number(this.a),2)*Math.pow(Number(this.b),2)-2*Number(this.a)*Number(this.b)*Math.cos(Number(this.angleC));
                    this.want = "radius = ";
                }
                 
                //NOT FINISHED

                 else {
                    this.result = "ERROR";
                    this.want = "";
                }
            }
    };

    $scope.secA ={ //Area of a sector scope
         
         want: '',
         a: '',
         b: '',
         c: '',
         angleA: '',
         angleB: '',
         angleC: '',
         result: '',
         
             calc: function(){
                 if (this.a !== '' && this.angleA !== ''){
                    if (this.b !== '' || this.angleB !== ''){
                      this.c = '';
                      this.angleC = '';
                      if (this.b === ''){
                        //a A B are full b c C are empty
                      }
                      else if (this.angleB === ''){
                        //a A b are full B c C are empty
                      }
                    }
                 }
                 
                 else if (this.radius === ""){
                    this.result = Math.sqrt(2 * Number(this.area) / Number(this.angle));
                    this.want = "radius = ";
                }
                 
                else if (this.angle === ""){
                    this.result = 2 * Number(this.area) / Math.pow(Number(this.radius),2);
                    this.want = "angle = ";
                }

                 else {
                    this.result = "ERROR";
                    this.want = "";
                }
            }
    };


}])
   
.controller('vectorsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    $scope.vector = {
     
        want: '',
        x: '',
        y: '',
        z: '',
        mag: '',
        
        result :  function(){
            if(mag === ''){
                this.mag = Math.sqrt(x*x + y*y + z*z);
                return this.mag;
            }
        }
    };
}])
   
.controller('statsProbablitityCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('calculusCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('priorLearning2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('algebra2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('functionsEquations2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

 
}])
   
.controller('circularFunctionsTrig2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
   
}])
   
.controller('vectors2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('statsProbabilityCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('calculus2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('statsProbability2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('setsRelationsGroupsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('calculus3Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('discreteMathmaticsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('discreteDistributionCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('continuousDistributionCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('linearAlgebraCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('measurementsUncertaintyCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('13EquationsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('memesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('pageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 