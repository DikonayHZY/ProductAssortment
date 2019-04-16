page_test = `
	<div style="width: 100%; height: 100%; position: fixed;">
		<div style="width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
			<div style="width: 100%; height: 40%; display: flex; align-items: center; justify-content: center;"><!-- 题目说明 -->
				<div style="width: 60%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 24px; line-height: 2; text-align: center;">
					<p>
						接下来将进行记忆测试<br>
						请<strong>仔细回忆</strong>之前看到的产品页面，回答接下来的问题<br>
						题目均为<strong>判断题</strong><br>
						请<strong style="color: red;">又快又准确</strong>地做出回答<br>
						一旦回答则<strong>自动进入下一题</strong>				
					</p>
				</div>			
			</div>
			<div style="width: 100%; height: 40%; display: flex; align-items: center; justify-content: center;">
				<a id="next_tips" href="#" style="width: 200px; height: 40px; border: 2px solid black; text-align: center; font-size: 26px;/*visibility: hidden*/;">开始记忆测试</a>
			</div>				
		</div>
	</div>	

`;