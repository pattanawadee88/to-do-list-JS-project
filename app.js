$(document).ready(function(){
  $("#add-btn").on("click", function(){
    if($("#input-text").val() !== '')
    {
      var checkBox = $("<i class='far fa-check-circle'></i>").click(function(){
        var x = $(this).parent();
        x.fadeOut(function(){
          $(".doneTask").append(x);
          x.fadeIn();
        })
        $(this).remove();
        $(edit).remove();
      });
      var task = $("<div class='task'></div>").text($("#input-text").val());
      var edit = $("<i class='far fa-edit'></i>").click(function(){
         
      });
      var tash = $("<i class='fas fa-trash-alt'></i>").click(function(){
        $(task).remove(); 
      });
      task.append(checkBox,edit,tash);
      $(".notDoneTask").append(task);
      $("#input-text").val("");
    }else {
      
      alert("There is something wrong.");
    }
  })
  $("#delete-all-btn").click(function(){
    $(".task").empty(); 
  })
})
