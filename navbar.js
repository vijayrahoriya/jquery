$(document).ready(function(){
  
    $('.box').hide();

    $('.top:eq(0) li:eq(0)').on({
        mouseover : function(){
            $('.box').show();
            $('.top li:eq(0) i:eq(0)').replaceWith('<i class="fa fa-chevron-up"></i>')
        },
        mouseout : function(){
            $('.box').hide()
            $('.top li:eq(0) i:eq(0)').replaceWith('<i class="fa fa-chevron-down"></i>')
        }
    })
    $('.box2').hide();
    $('.top:eq(1) li:eq(0)').on({
        mouseover : function(){
            $('.box2').show();
            $('.top:eq(1) li:eq(0) i:eq(0)').replaceWith('<i class="fa fa-chevron-up"></i>')
        },
        mouseout : function(){
            $('.box2').hide()
            $('.top:eq(1) li:eq(0) i:eq(0)').replaceWith('<i class="fa fa-chevron-down"></i>')
        }
    })
    $('.box3').hide();
    $('.top:eq(2) li:eq(0)').on({
        mouseover : function(){
            $('.box3').show();
            $('.top:eq(2) li:eq(0) i:eq(0)').replaceWith('<i class="fa fa-chevron-up"></i>')
        },
        mouseout : function(){
            $('.box3').hide()
            $('.top:eq(2) li:eq(0) i:eq(0)').replaceWith('<i class="fa fa-chevron-down"></i>')
        }
    })
    $('.box4').hide();
    $('.top:eq(3) li:eq(0)').on({
        mouseover : function(){
            $('.box4').show();
            $('.top:eq(3) li:eq(0) i:eq(0)').replaceWith('<i class="fa fa-chevron-up"></i>')
        },
        mouseout : function(){
            $('.box4').hide()
            $('.top:eq(3) li:eq(0) i:eq(0)').replaceWith('<i class="fa fa-chevron-down"></i>')
        }
    })
    $('.box5').hide();
    $('.top:eq(4) li:eq(0)').on({
        mouseover : function(){
            $('.box5').show();
            $('.top:eq(4) li:eq(0) i:eq(0)').replaceWith('<i class="fa fa-chevron-up"></i>')
        },
        mouseout : function(){
            $('.box5').hide()
            $('.top:eq(4) li:eq(0) i:eq(0)').replaceWith('<i class="fa fa-chevron-down"></i>')
        }
    })

})
