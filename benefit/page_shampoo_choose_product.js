page_shampoo_choose_product = `
	<div style="width: 100%; height: 100%; position: fixed;">
		<div style="width: 100%; height: 20%;"><!-- 顶部 -->
			<div style="width: 100%; height: 50%; min-height: 40px; background-color: black; display: flex; align-items: center; justify-content: center;">
				<img src="../resource/shampoo_logo2.png">
			</div>
			<div style="width: 100%; height: 50%; background-color: #262626; display: flex; align-items: center; justify-content: center; font-size: 26px; color: white;" id="assortment_title">白松露</div>
		</div>

		<div style="width: 100%; height: 80%; display: flex;"> <!-- 下半部分 -->
			<div style="width: 15%; height: 100%; min-width: 150px; /*background-color: green; */display: flex; align-items: center; justify-content: center;"> <!-- 左侧导航栏 -->
				<div class="shampoo_left_menu" style="width: 100%; height: 70%; display: flex; flex-direction: column; align-items: center; justify-content: center; ">
					<a href="#" id="left_green_tea">海洋味</a><br>
					&emsp;<br>
					<a href="#" id="left_red_tea">柠檬香</a><br>
					&emsp;<br>
					<a href="#" id="left_qing_tea">迷迭香</a><br>
					&emsp;<br>
					<a href="#" id="left_hua_tea">松木香</a>
				</div>
			</div>

			<div style="width: 85%; height: 100%;"> <!-- 正文部分 -->
				<div style="width: 100%; height: 45%; display: flex; justify-content: center;"> <!-- 商品陈列区 -->
					<div class="shampoo_chenlie" style="width: 80%; height: 100%; display: flex; justify-content: space-around;">					
						<a href="#" style="width: 15%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;" id="choice_1">
							<img id="pic_1" src="" style="height: 80%;">
							<p id="text_1">洗发水</p>
						</a>
						<a href="#" style="width: 15%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;" id="choice_2">
							<img id="pic_2" src="" style="height: 80%;">
							<p id="text_2">洗发水</p>
						</a>
						<a href="#" style="width: 15%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;" id="choice_3">
							<img id="pic_3" src="" style="height: 80%;">
							<p id="text_3">洗发水</p>
						</a>						
						<a href="#" style="width: 15%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;" id="choice_4">
							<img id="pic_4" src="" style="height: 80%;">
							<p id="text_4">洗发水</p>
						</a>
						<a href="#" style="width: 15%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;" id="choice_5">
							<img id="pic_5" src="" style="height: 80%;">
							<p id="text_5">洗发水</p>
						</a>						
					</div>
				</div>

				<div id="product_discription" style="width: 100%; height: 55%; display: none;">
					<div style="height: 20%; width: 100%; display: flex;">
						<div style="width: 40%; height: 100%; display: flex; flex-direction: column;">
							<div style="width: 100%; height: 50%; border-bottom: 1px solid #262626;"></div>
							<div style="width: 100%; height: 50%;"></div>
						</div>
						<div  id="tea_name" style="width: 20%; min-width: 200px; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 28px;">
							选中的洗发水
						</div>
						<div style="width: 40%; height: 100%; display: flex; flex-direction: column;">
							<div style="width: 100%; height: 50%; border-bottom: 1px solid #262626;"></div>
							<div style="width: 100%; height: 50%;"></div>
						</div>						

					</div>
					<div style="height: 80%; width: 100%; display: flex;">
						<div style=" height: 100%; width: 20%; display: flex; align-items: center; justify-content: center; ">
							<img  style="height: 90%;" src="" id="select_pic">
						</div>
						<div style="height: 100%; width: 55%; display: flex; flex-direction: column; align-items: flex-start; justify-content: center; font-size: 22px; line-height: 2.0;">

							<p><strong>特性成分：</strong><span id="tea_assortment">白松露</span></p>							
							<p><strong>产品功效：</strong><span id="tea_benefit">祛屑止痒</span></p>

							<p id="other_discription">不含防腐剂，无硅油，不含硫酸盐</p>							

						</div>

						<div style=" height: 100%; width: 25%; display: flex; align-items: center; justify-content: flex-start; ">
							<a id="buy_button" href="#" style="width: 70%; height: 40px; border: 2px solid black; font-size: 28px; font-weight: 600; visibility: visiable; text-align: center;">选择</a>
						</div>

					</div>
					
				</div>


				<div id="product_tips" style="width: 100%; height: 55%; display: block;">
					<div style="height: 100%; width: 100%; display: flex; align-items: center; justify-content: center; font-size: 26px; line-height: 2;">
						<p>
							请找到商品“<span id="answer">ALTERNA-PH</span>”，然后点击“确定”按钮<br>
							点击商品查看详情！
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>	
`;