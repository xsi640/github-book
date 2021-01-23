查看硬盘信息
```
fdisk -l
```

查看磁盘uuid
```
sudo blkid
```

查看挂载的磁盘
```
df -h
```

手动挂载
```
mount /dev/sda /mnt/disk1
```

查看分区信息
```
parted /dev/sda print
```

开机自动挂载
```
vi /etc/fstab
```
格式
```
[UUID=************] [挂载磁盘分区]  [挂载磁盘格式]  0  2
```
第一个数字：0表示开机不检查磁盘，1表示开机检查磁盘； 
第二个数字：0表示交换分区，1代表启动分区（Linux），2表示普通分区 
例如：
```
UUID=1e9975f2-74da-4386-b9bd-42ef59a44a86 /mnt/disk1 ext4 defaults 0 2
UUID=bc655648-a0cf-9746-a09d-4bce7311e8fd /mnt/disk2 ext4 defaults 0 2
```


/dev/sda1: UUID="1e9975f2-74da-4386-b9bd-42ef59a44a86" TYPE="ext4" PARTLABEL="MiWiFi Storage" PARTUUID="a837b230-114b-4172-945e-4af8505010a2"
/dev/sdc2: UUID="8b84eef9-09bb-4604-8049-8e09da9c84b1" TYPE="ext4" PARTUUID="c652facd-0ebf-4540-9f42-72f96907a560"