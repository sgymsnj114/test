$.validator.addMethod(
  "regex",
  function(value, element, regexp) {
    var check = false;
    return this.optional(element) || regexp.test(value);
  }
);

$('form').validate({
  rules: {
    email: {
      required: true,
      email: true
    },
    privacyPolicy: {
      required: true,
    },
    tel: {
      required: true,
      minlength: 11,
      regex: /^0\d{9,10}$/,
    },
    password: {
      required: true,
      minlength:8,
    },
    repassword: {
      required: true,
      minlength:8,
      equalTo: "#password",
    },
    familyName: {
      required: true,
      regex: /^[ァ-ー]+$/,
    },
    givenName: {
      required: true,
      regex: /^[ァ-ー]+$/,
    },
    year: {
      required: true,
    },
    month: {
      required: true,
    },
    day: {
      required: true,
    },
    emailInvitation: {
      required: true,
      email: true,
    },
    telInvitation: {
      required: true,
      minlength: 11,
      regex: /^0\d{9,10}$/,
    }
  },
  messages: {
    email: {
      required: 'メールアドレスは入力必須です。',
      email: 'メールアドレス形式で入力してください。'
    },
    privacyPolicy: {
      required: '必須項目です。選択して下さい。',
    },
    tel: {
      required: '電話番号は必須です。半角数字でハイフンを含めずに入力してください。',
      minlength: '電話番号は必須です。半角数字でハイフンを含めずに入力してください',
      regex: '半角数字でハイフンを含めずに入力してください。',
    },
    password: {
      required: 'パスワードは必須です。',
      minlength: '8文字以上の数字で入力してください'
    },
    repassword: {
      required: 'パスワードは必須です。',
      minlength: '8文字以上の数字で入力してください',
      equalTo: '確認入力と一致しません'
    },
    familyName: {
      required: '姓（フリガナ）は必須です。',
      regex: '姓（カタカナ）で入力してください'
    },
    givenName: {
      required: '名（フリガナ）は必須です。',
      regex: '名（半角カタカナ）で入力してください'
    },
    year: {
      required: '生年月日（年）は必須です。入力してください。',
    },
    month: {
      required: '生年月日（月）は必須です。入力してください。',
    },
    day: {
      required: '生年月日（日）は必須です。入力してください。',
    },
    emailInvitation: {
      required: '招待先メールアドレスは必須です。',
      email: "メールアドレス形式で入力してください。",
    },
    telInvitation: {
      required: '招待元の契約時の電話番号は必須です。半角数字でハイフンを含めずに入力してください。',
      minlength: '招待元の契約時の電話番号は必須です。半角数字でハイフンを含めずに入力してください',
      regex: '半角数字でハイフンを含めずに入力してください。',
    }
  },
  errorPlacement: function (error, element) {
    var name = element.attr('name');
    error.appendTo($('.is-error-' + name));
  },
  onfocusout: function(element) {
    $(element).valid();
  },

  errorElement: "span",
  errorClass: "is-error",
});
