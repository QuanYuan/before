Rails.application.config.middleware.use OmniAuth::Builder do
  #provider :developer unless Rails.env.production?
  provider :twitter, "t7BDFVwJnjrEnAvKGDKjg", "Wv0ct8VMNLEa6wz5tpVPtQJQYBGtSXRmHpAGeXcJIY"
end
