function nowtime(){
  // 创建一个Date对象
  var currentDate = new Date();
  // 获取当前年份
  var year = currentDate.getFullYear();
  // 获取当前月份（注意：月份从0开始，所以要加1）
  var month =  currentDate.getMonth() + 1;
  // 获取当前日期
  var day = currentDate.getDate();
  // 获取当前小时数
  var hours = ('0'+currentDate.getHours()).slice(-2);
  // 获取当前分钟数
  var minutes = ('0'+currentDate.getMinutes()).slice(-2);
  // 获取当前秒数
  var seconds = ('0'+currentDate.getSeconds()).slice(-2);
  var nowtime=year+'年'+month+'月'+day+'日'+' '+hours+':'+minutes+':'+seconds;
  $(".header-time").text(nowtime);
}