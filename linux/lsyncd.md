1. install
apt-get install lsyncd
2. 配置
/etc/lsyncd.conf
settings {
    logfile     = "/var/log/lsyncd/lsyncd.log"
    statusFile  = "/var/log/lsyncd/lsyncd.status"
    inotifyMode = "CloseWrite"
    nodaemon    = true
    maxProcesses= 8
}
sync {
    source      = "/root/s1"
    target      = "/root/s2"
    rsync       = {
        binary    = "/usr/bin/rsync",
        archive = true,
        compress = false,
        verbose = true,

    }
}
3. 开启运行
systemctl enable lsyncd