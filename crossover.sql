use crossover;


create table User(
	user_id int AUTO_INCREMENT not null,
	username varchar(50) unique,
	coins int default 1000,
	logged  boolean default false,

	Constraint pk_user PRIMARY KEY (user_id)
)Engine=InnoDB;



create table Item(
	item_id int AUTO_INCREMENT not null,
	item_name varchar(50),
	item_img  varchar(100),
	
	Constraint pk_item PRIMARY KEY (item_id)
)Engine=InnoDB;


create table UserItem(
	user_id int not null,
	item_id int not null,
	item_quantity int default 0,
	
	Constraint pk_useritem Primary Key(user_id,item_id),
	Constraint fk_user_id Foreign Key (user_id) references User(user_id),
	Constraint fk_item_id Foreign Key (item_id) references Item(item_id)

)Engine=InnoDB;



select * from User;






