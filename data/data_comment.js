var comment = {
  "id": 1,
  "data": [{
      "info_id": 1,
      "c_comment_id": 1,
      "comment": "真不错",
      "c_user_id": 2,
      "c_user_name": "Jack",
      "c_user_img": "../../images/icon2.jpg",
      "c_good_num": 5,
      "c_comment_num": 0,
      "c_islike": false,
      "children": [{
          "f_comment_id": 1,
          "comment": "俺也觉得",
          "f_user_id": 1,
          "f_user_name": "Lily",
          "f_user_img": "../../images/icon1.jpg",
          "t_user_id": 2,
          "t_user_name": "Jack",
          "f_good_num": 1,
          "f_comment_num": 1,
          "f_islike": true
        },
        {
          "f_comment_id": 2,
          "comment": "嘿嘿嘿",
          "f_user_id": 2,
          "f_user_name": "Jack",
          "f_user_img": "../../images/icon2.jpg",
          "t_user_id": 1,
          "t_user_name": "Lily",
          "f_good_num": 1,
          "f_comment_num": 0,
          "f_islike": false
        }
      ]
    },
    {
      "info_id": 1,
      "c_comment_id": 2,
      "comment": "真不错啊",
      "c_user_id": 2,
      "c_user_name": "Jack",
      "c_user_img": "../../images/icon2.jpg",
      "c_good_num": 5,
      "c_comment_num": 0,
      "c_islike": false
    }
  ]

}

module.exports.comment = comment;