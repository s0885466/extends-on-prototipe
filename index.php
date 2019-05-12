<?php

sleep(1);

define('ROOT', __DIR__);

include_once (ROOT . '/components/Db.php');

function getElement($id)
{
    $pdo = Db::getConnection();
    //$sql = "SELECT * FROM `tb_category` WHERE `id`=:id";
    $sql = "SELECT * FROM `tb_category`";
    $query = $pdo->prepare($sql);
    $query->execute(['id'=>$id]);
    $result = $query->fetchAll(PDO::FETCH_ASSOC);
    return $result;
}

if (!headers_sent()) {
    header('Access-Control-Allow-Origin: *');
} else {
    // обработка ошибки или уведомление разработчикам
}


$data = getElement('1');
header('Content-Type: application/json');

echo json_encode($data,JSON_UNESCAPED_UNICODE );
