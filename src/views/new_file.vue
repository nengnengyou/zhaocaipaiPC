<template>
	<div>

		<div class="login-box-warp">
			<div id="container" class="login-box loading">
				<div id="login" class="width-vertical login-label-icon login-view-password taobao_pc">
					<div class="corner-icon-view view-type-qrcode"><i class="iconfont icon-qrcode"></i>
						<div class="login-tip">
							<div class="poptip">
								<div class="poptip-arrow"><em></em><span></span></div>
								<div class="poptip-content">扫码登录更安全</div>
							</div>
						</div>
					</div>
					<div class="login-content nc-outer-box">
						<div class="login-password">
							<div class="login-blocks login-switch-tab"><a href="javascript:void(0);" target="_self" class="password-login-tab-item">密码登录</a><a
								 href="javascript:void(0);" target="_self" class="sms-login-tab-item">短信登录</a></div>
							<div id="login-error" class="login-error" style="display: none;"><i class="iconfont icon-warning"></i>
								<div class="login-error-msg"></div>
							</div>
							<form id="login-form" class="login-form">
								<div class="fm-field">
									<div><label class="fm-label-icon"><i class="icon-user iconfont" title="用户名"></i></label></div>
									<div class="input-plain-wrap input-wrap-loginid "><input name="fm-login-id" type="text" class="fm-text" id="fm-login-id"
										 tabindex="1" aria-label="会员名/邮箱/手机号" placeholder="会员名/邮箱/手机号" autocapitalize="off"></div>
								</div>
								<div class="fm-field">
									<div><label class="fm-label-icon"><i class="icon-pwd iconfont" title="请输入登录密码"></i></label></div>
									<div class="input-plain-wrap input-wrap-password"><input name="fm-login-password" type="password" class="fm-text"
										 id="fm-login-password" tabindex="2" aria-label="请输入登录密码" placeholder="请输入登录密码" maxlength="40" autocapitalize="off"></div>
								</div>
								<div>
									<div id="nocaptcha-password" class="nc-container tb-login" data-nc-idx="1" style="display: none;">
										<div id="nc_1_wrapper" class="nc_wrapper">
											<div id="nc_1_n1t" class="nc_scale">
												<div id="nc_1__bg" class="nc_bg"></div>
												<span id="nc_1_n1z" class="nc_iconfont btn_slide"></span>
												<div id="nc_1__scale_text" class="scale_text slidetounlock"><span class="nc-lang-cnt" data-nc-lang="_startTEXT">请按住滑块，拖动到最右边</span></div>
												<div id="nc_1_clickCaptcha" class="clickCaptcha">
													<div class="clickCaptcha_text">
														<b id="nc_1__captcha_text" class="nc_captch_text"></b>
														<i id="nc_1__btn_2" class="nc_iconfont nc_btn_2 btn_refresh"></i>
													</div>
													<div class="clickCaptcha_img"></div>
													<div class="clickCaptcha_btn"></div>
												</div>
												<div id="nc_1_imgCaptcha" class="imgCaptcha">
													<div class="imgCaptcha_text"><input id="nc_1_captcha_input" maxlength="6" type="text" style="ime-mode:disabled"></div>
													<div class="imgCaptcha_img" id="nc_1__imgCaptcha_img"></div>
													<i id="nc_1__btn_1" class="nc_iconfont nc_btn_1 btn_refresh" onclick="document.getElementById('nc_1__imgCaptcha_img').children[0].click()"></i>
													<div class="imgCaptcha_btn">
														<div id="nc_1__captcha_img_text" class="nc_captcha_img_text"></div>
														<div id="nc_1_scale_submit" class="nc_scale_submit"></div>
													</div>
												</div>
												<div id="nc_1_cc" class="nc-cc"></div>
												<i id="nc_1__voicebtn" tabindex="0" role="button" class="nc_voicebtn nc_iconfont" style="display:none"></i>
												<b id="nc_1__helpbtn" class="nc_helpbtn"><span class="nc-lang-cnt" data-nc-lang="_learning">了解新功能</span></b>
											</div>
											<div id="nc_1__voice" class="nc_voice"></div>
										</div>
									</div>
								</div>
								<div class="fm-btn"><button type="submit" tabindex="3" class="fm-button fm-submit password-login">登录</button></div>
								<div class="login-blocks sns-login-links"><a href="http://weibo.com/login.php?entry=taobao&amp;goto=https%3A%2F%2Flogin.taobao.com%2Faso%2Ftvs%3Fdomain%3Dweibo%26sid%3D459b43466c00bdbf72a80423f5c19c20%26target%3D687474703A2F2F692E74616F62616F2E636F6D2F6D795F74616F62616F2E68746D3F73706D3D613231626F2E323031372E313939373532353034352E312E313063303131643950584B463953&amp;goto2=http%3A%2F%2Fi.taobao.com%2Fmy_taobao.htm%3Fspm%3Da21bo.2017.1997525045.1.10c011d9PXKF9S"
									 target="_self" class="weibo-login"><i class="iconfont"></i>微博登录</a><a href="https://auth.alipay.com/login/index.htm?loginScene=7&amp;goto=https%3A%2F%2Fauth.alipay.com%2Flogin%2Ftaobao_trust_login.htm%3Ftarget%3Dhttps%253A%252F%252Flogin.taobao.com%252Fmember%252Falipay_sign_dispatcher.jhtml%253Ftg%253Dhttp%25253A%25252F%25252Fi.taobao.com%25252Fmy_taobao.htm%25253Fspm%25253Da21bo.2017.1997525045.1.10c011d9PXKF9S&amp;params=VFBMX3JlZGlyZWN0X3VybD1odHRwJTNBJTJGJTJGaS50YW9iYW8uY29tJTJGbXlfdGFvYmFvLmh0bSUzRnNwbSUzRGEyMWJvLjIwMTcuMTk5NzUyNTA0NS4xLjEwYzAxMWQ5UFhLRjlT"
									 target="_self" class="alipay-login"><i class="iconfont"></i>支付宝登录</a></div>
								<div class="login-blocks login-links"><a href="https://passport.taobao.com/ac/password_find.htm?from_site=0&amp;lang=zh_CN&amp;app_name=tb&amp;tracelog=signin_main_pass"
									 target="_blank" class="forgot-password-a-link">忘记密码</a><a href="https://passport.taobao.com/ac/nick_find.htm?from_site=0&amp;lang=zh_CN&amp;app_name=tb"
									 target="_blank" class="forgot-username-a-link">忘记用户名</a><a href="https://reg.taobao.com/member/newbie.htm?from=login"
									 target="_blank" class="register-a-link">免费注册</a></div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div id="_umfp" style="display:inline;width:1px;height:1px;overflow:hidden">
				<!-- umidServer已经带了/ -->
				<img src="https://ynuf.alipay.com/service/clear.png?xt=e926200e8bb91a52fa795488bdb5564c3e8b743d&amp;xa=090D1F110F187839282B151408">
			</div>

			
		</div>


	</div>
</template>

<script>
</script>

<style>
</style>
