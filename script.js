'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function getAge() {
	//入力された日付を取得
	const birthYear = document.getElementById("birthYear").value;
	const birthMonth = document.getElementById("birthMonth").value;
  const birthDate = document.getElementById("birthDate").value;
  const birthday = new Date(birthYear + ',' + birthMonth + ',' + birthDate );

	//今日の日付を取得
  const today = new Date(); //今日
	// console.log(today)
  const nowYear = today.getFullYear();
  const nowMonth = today.getMonth();
  const nowDate = today.getDate();

	if (isNaN(birthYear)) { //isNaN 数値でない時true
		return alert("入力年に数値を入力してください")
	} else if (birthYear > nowYear) {
    return alert("未来の日付(年)は入力できません")
  } else if (isNaN(birthMonth)) {
    return alert("入力月に数値を入力してください")
  } else if (birthMonth < 1 || birthMonth > 12) {
    return alert("入力月に正しい値を設定してください")
  } else if (birthYear === nowYear && birthMonth > nowMonth) {
    return alert("未来の日付(月)は入力できません")
  } else if (isNaN(birthDate)) {
    return alert("年に数値を入力してください")
  } else if (birthDate < 1 || birthDate > 31) {
    return alert("入力年に正しい値を設定してください")
  } else if (birthYear === nowYear && birthMonth === nowMonth && birthDate > nowDate) {
    return alert("未来の日付(日)は入力できません")
  }

	//今年の誕生日
	const thisYearsBirthday = new Date(today.getFullYear(), birthMonth, birthDate);
	//年齢計算
	let age = today.getFullYear() - birthday.getFullYear();

	if(today < thisYearsBirthday){
		//今年まだ誕生日が来ていない
		age = age - 1;
	}

  age = "私の年齢は現在、" + age + "歳です🙋‍♂️"

  document.getElementById("age").innerHTML = age;
}
