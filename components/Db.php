<?php
/**
 * Класс D
 * Статический метод getConnection() подключает файл params.php
 * с настройками подключения к удаленной базе данных, 
 * и возвращает объект $pdo класса PDO для дальнейшей работы.
 * также устанавливается кодировка utf8
 */
class Db
{
    public static function getConnection()
    {
        $paramsPath = ROOT . '/config/db_params.php';
        $params = include ($paramsPath);
        $pdo = new PDO(
		"mysql:host={$params['host']};
		dbname={$params['dbname']}",
        $params['reg'],
		$params['password']
		);
        $pdo->exec("set names utf8");
        return $pdo;
    }
}