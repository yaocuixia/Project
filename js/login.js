$(function(){
    $('#but').click(function(){
        var Txt=$('#txt').val();
        var Pass=$('#pass').val();
        if(Txt==""||Txt==null){
           alert("用户名不能为空");
            return false;
        }
        if(Pass==''||Pass==null){
            alert("密码不能为空");
            return false;
        }
        if(Txt!='1946854552'||Pass!='ycx960701'){
            alert("用户名或密码不正确");
            return  false;
        } $("#form1").submit();

    });
});

