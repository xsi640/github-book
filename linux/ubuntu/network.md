## 修改dns
# vi /etc/resolvconf/resolv.conf.d/base
```
nameserver 114.114.114.114
```

修改生效
```
resolvconf -u
```


