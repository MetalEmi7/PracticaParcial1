<?php 

require_once 'db.php';

class GenericDAO
{

	private static function getPDO() 
	{	
		return $PDOInstance = DB::getInstance(); 
	}

    public static function getAll($table){

        try{
			$db = GenericDAO::getPDO();

			$sql = "select * from ".$table;
			$statement = $db->sendQuery($sql);
			$statement->execute();
            $rv = $statement->fetchAll(PDO::FETCH_ASSOC);
			return json_encode($rv);
		}catch(Exception $ex){
			die("Error: " . $ex->getMessage());
		}
    }



	public static function getUser($table, $user){

        try{
			$db = GenericDAO::getPDO();

			$sql = "select * from " .$table. "where nombre = :nombre AND password = :password2";
			
			$statement = $db->sendQuery($sql);
			$statement->bindValue(":nombre", $user['nombre'], PDO::PARAM_STR);
			$statement->bindValue(":password", $user['password'], PDO::PARAM_STR);

			$statement->execute();

            $rv = $statement->fetchAll(PDO::FETCH_ASSOC);

			return json_encode($rv);
		}catch(Exception $ex){
			die("Error: " . $ex->getMessage());
		}
    }



	public static function insert($table,$params){

        try{
			$db = GenericDAO::getPDO();

			$sql = "insert into ".$table . "(nombre, email, password, perfil, foto) values (:1, :2, :3, :5, :4)"; //<--- modificar por los campos necesarios
			$statement = $db->sendQuery($sql);
			$statement->bindValue(":1", $params['nombre'], PDO::PARAM_STR);
			$statement->bindValue(":2", $params['email'], PDO::PARAM_STR);
			$statement->bindValue(":3", $params['password'], PDO::PARAM_STR);			 //para otros tipos de constantes predefinidas ver http://php.net/manual/es/pdo.constants.php
			$statement->bindValue(":4", $params['foto'], PDO::PARAM_STR);
			$statement->bindValue(":5", $params['perfil'], PDO::PARAM_STR);
			$statement->execute();

		}catch(Exception $ex){
			$message = $ex->getMessage();
			die("Error: " . $ex->getMessage());
		}
    }

	public static function update($table,$params){

        try{
			$db = GenericDAO::getPDO();

			$sql = "update ".$table . " set nombre = :1,  email = :2, password = :3, foto = :4, perfil = :5 where id=:id"; //<---- modificar los campos que sean necesarios
			$statement = $db->sendQuery($sql);
			$statement->bindValue(":1", $params['nombre'], PDO::PARAM_STR);
			$statement->bindValue(":2", $params['email'], PDO::PARAM_STR);
			$statement->bindValue(":3", $params['password'], PDO::PARAM_STR);			 //para otros tipos de constantes predefinidas ver http://php.net/manual/es/pdo.constants.php
			$statement->bindValue(":4", $params['foto'], PDO::PARAM_STR);
			$statement->bindValue(":5", $params['perfil'], PDO::PARAM_STR);
			$statement->execute();

		}catch(Exception $ex){
			$message = $ex->getMessage();
			die("Error: " . $ex->getMessage());
		}
    }

	public static function delete($table,$id){

        try{
			$db = GenericDAO::getPDO();

			$sql = "delete from ".$table . " where id = :id"; //<--- modificar por la condición necesaria
			$statement = $db->sendQuery($sql);
			$statement->bindValue(":id", $id, PDO::PARAM_INT);	//para otros tipos de constantes predefinidas ver http://php.net/manual/es/pdo.constants.php
			$statement->execute();

		}catch(Exception $ex){
			$message = $ex->getMessage();
			die("Error: " . $ex->getMessage());
		}
    }
}
?>