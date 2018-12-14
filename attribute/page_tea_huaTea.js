page_tea_huaTea = `
	<div style="position: fixed; width: 100%; height: 100%; padding: 0; margin: 0; "> <!-- 最大的盒子, position可继承 -->
		<div style="width: 100%; height: 13%; padding: 0; margin: 0; font-size:0; display: flex; flex-direction:row; /*background-color: blue*/; position: relative;"> <!-- 顶部长条盒子 -->
			<div style="min-width: 292px; display: flex;" >
				<img style="height: 62px;" src="../resource/御茗阁2.png">
				<img style="height: 62px;" src="../resource/cup.png">
			</div>
			<div style="width: 66%; height: 100%; padding: 0; margin: 0; display: flex; align-items: center; justify-content: center;font-size: 50px; font-family: SimSun; color: #CE6E60;">
				<div>
					<strong>花茶</strong>
				</div>
			</div>	
		</div>
		<div style="width: 100%; height: 87%; padding: 0; margin: 0; display: flex;">
			<div style="min-width: 133px; height: 100%; padding: 0; margin: 0; overflow: hidden;">
				<ul id="left_menu" style="width: 133px; height: 634px; padding: 0; margin: 0; list-style: none; /*background-color: red*/;">
					<li class="i1" id="left_green_tea" >
						<a href="#" class="a1">
						</a>
					</li>
					<li class="i2" id="left_red_tea">
						<a href="#" class="a2">
						</a>
					</li>
					<li class="i2" id="left_qing_tea">
						<a href="#" class="a3">
						</a>
					</li>
					<li class="i1" id="left_hua_tea">
						<a href="#" class="a4">
						</a>
					</li>
				</ul>
			</div>

			<div style=" height: 100%; width: 100%; /*background-color: yellow;*/ display: flex; flex-direction: column; ">

				<div class="information" style="width: 100%; height: 14%; display:flex; margin: 0; padding: 0; align-items: center; justify-content: center;">
					<div style="font-size: 22px; text-align: center;line-height: 1.5;">
						请点击下方<strong>花茶</strong>的图片或文字，更多信息！<br>
						点击右边的导航栏可以切换茶叶类别<br>
						当您选定想要的茶叶后，请点击下方的“下单”按钮<br>
						<span style="color: red;">“下单”按钮只有在您<strong>浏览5个茶叶的详细信息后</strong>才会出现！</span>
					</div>					
				</div>

				<div class="product" style="width: 100%; height: 50%; display: flex; flex-direction:row; justify-content: space-around; align-items: center; ">
					<div class="each_product" style="width: 110px; height: 150px; margin: 0; padding: 0; display: flex; flex-direction: column;" id="choice_1">
						<a href="#" style="width: 100%; height: 100%;">
							<img style="width: 100%; height: 90%;" src="../resource/茶叶图鉴/白茶-白毫银针.JPG" id="pic_1">
							<div style="width: 100%; height: 10%; text-align: center;" class="product_name" id="text_1">
							喵喵喵
							</div>
						</a>												
					</div>

					<div class="each_product" style="width: 110px; height: 150px; margin: 0; padding: 0; display: flex; flex-direction: column;" id="choice_2">
						<a href="#" style="width: 100%; height: 100%;">
							<img style="width: 100%; height: 90%;" src="../resource/茶叶图鉴/白茶-白毫银针.JPG" id="pic_2">
							<div style="width: 100%; height: 10%; text-align: center;" class="product_name" id="text_2">
							喵喵喵
							</div>
						</a>												
					</div>

					<div class="each_product" style="width: 110px; height: 150px; margin: 0; padding: 0; display: flex; flex-direction: column;" id="choice_3">
						<a href="#" style="width: 100%; height: 100%;">
							<img style="width: 100%; height: 90%;" src="../resource/茶叶图鉴/白茶-白毫银针.JPG" id="pic_3">
							<div style="width: 100%; height: 10%; text-align: center;" class="product_name" id="text_3">
							喵喵喵
							</div>
						</a>												
					</div>

					<div class="each_product" style="width: 110px; height: 150px; margin: 0; padding: 0; display: flex; flex-direction: column;" id="choice_4">
						<a href="#" style="width: 100%; height: 100%;">
							<img style="width: 100%; height: 90%;" src="../resource/茶叶图鉴/白茶-白毫银针.JPG" id="pic_4">
							<div style="width: 100%; height: 10%; text-align: center;" class="product_name" id="text_4">
							喵喵喵
							</div>
						</a>												
					</div>

					<div class="each_product" style="width: 110px; height: 150px; margin: 0; padding: 0; display: flex; flex-direction: column;" id="choice_5">
						<a href="#" style="width: 100%; height: 100%;">
							<img style="width: 100%; height: 90%;" src="../resource/茶叶图鉴/白茶-白毫银针.JPG" id="pic_5">
							<div style="width: 100%; height: 10%; text-align: center;" class="product_name" id="text_5">
							喵喵喵
							</div>
						</a>												
					</div>
					
				</div>

				<div id="product_discription" style="height: 36%; width: 100%; font-size: 10px; text-align: center; display: flex; align-items: center; visibility: hidden;" >

					<div style=" height: 100%; width: 25%; display: flex; align-items: center; justify-content: center; ">
						<img  style="height: 90%;" src="../resource/茶叶图鉴/白茶-白毫银针.JPG" id="select_pic">
					</div>

					<div class="tea_discription" style=" height: 100%; width: 45%; display: flex; flex-direction: column; align-items: center; justify-content: center;" >
						<div id="tea_name" style=" height: 20%; width: 100%; text-align: center; font-size: 22px;" >
							茶叶名称（去掉前缀）
						</div>

						<div style="height: 80%; width: 100%; display: flex; align-items: center; justify-content: center; font-size: 20px; line-height: 2;">
							<div style=" height: 100%; width: 50%; display: flex; align-items: center; justify-content: center;">
								<div style="text-align: center;">性状：<span id="other_discription">绿叶绿汤</span></div>																	
							</div>

							<div  style=" height: 100%; width: 50%; display: flex; align-items: center; justify-content: center; ">
								<div style="text-align: center;">
									品类：<span id="tea_assortment"><strong>绿茶</strong></span><br>
									功效：<span id="tea_benefit">美容养颜</span>
								</div>																	
							</div>							
							
						</div>
						
					</div>


					<div style=" height: 100%; width: 30%; display: flex; align-items: center; justify-content: center;">
						<button id="buy_button" style="font-size: 28px; visibility: hidden;">下单</button>
					</div>
					
				</div>
			
			</div>
			
		</div>

	</div>
`;
