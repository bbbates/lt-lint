if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.protocols')) {
goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = 1024;
cljs.core.async.impl.protocols.ReadPort = (function (){var obj28950 = {};return obj28950;
})();
cljs.core.async.impl.protocols.take_BANG_ = (function take_BANG_(port,fn1_handler){if((function (){var and__19792__auto__ = port;if(and__19792__auto__)
{return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2;
} else
{return and__19792__auto__;
}
})())
{return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(port,fn1_handler);
} else
{var x__20431__auto__ = (((port == null))?null:port);return (function (){var or__19804__auto__ = (cljs.core.async.impl.protocols.take_BANG_[goog.typeOf(x__20431__auto__)]);if(or__19804__auto__)
{return or__19804__auto__;
} else
{var or__19804__auto____$1 = (cljs.core.async.impl.protocols.take_BANG_["_"]);if(or__19804__auto____$1)
{return or__19804__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ReadPort.take!",port);
}
}
})().call(null,port,fn1_handler);
}
});
cljs.core.async.impl.protocols.WritePort = (function (){var obj28952 = {};return obj28952;
})();
cljs.core.async.impl.protocols.put_BANG_ = (function put_BANG_(port,val,fn1_handler){if((function (){var and__19792__auto__ = port;if(and__19792__auto__)
{return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3;
} else
{return and__19792__auto__;
}
})())
{return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(port,val,fn1_handler);
} else
{var x__20431__auto__ = (((port == null))?null:port);return (function (){var or__19804__auto__ = (cljs.core.async.impl.protocols.put_BANG_[goog.typeOf(x__20431__auto__)]);if(or__19804__auto__)
{return or__19804__auto__;
} else
{var or__19804__auto____$1 = (cljs.core.async.impl.protocols.put_BANG_["_"]);if(or__19804__auto____$1)
{return or__19804__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"WritePort.put!",port);
}
}
})().call(null,port,val,fn1_handler);
}
});
cljs.core.async.impl.protocols.Channel = (function (){var obj28954 = {};return obj28954;
})();
cljs.core.async.impl.protocols.close_BANG_ = (function close_BANG_(chan){if((function (){var and__19792__auto__ = chan;if(and__19792__auto__)
{return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1;
} else
{return and__19792__auto__;
}
})())
{return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(chan);
} else
{var x__20431__auto__ = (((chan == null))?null:chan);return (function (){var or__19804__auto__ = (cljs.core.async.impl.protocols.close_BANG_[goog.typeOf(x__20431__auto__)]);if(or__19804__auto__)
{return or__19804__auto__;
} else
{var or__19804__auto____$1 = (cljs.core.async.impl.protocols.close_BANG_["_"]);if(or__19804__auto____$1)
{return or__19804__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Channel.close!",chan);
}
}
})().call(null,chan);
}
});
cljs.core.async.impl.protocols.closed_QMARK_ = (function closed_QMARK_(chan){if((function (){var and__19792__auto__ = chan;if(and__19792__auto__)
{return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1;
} else
{return and__19792__auto__;
}
})())
{return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1(chan);
} else
{var x__20431__auto__ = (((chan == null))?null:chan);return (function (){var or__19804__auto__ = (cljs.core.async.impl.protocols.closed_QMARK_[goog.typeOf(x__20431__auto__)]);if(or__19804__auto__)
{return or__19804__auto__;
} else
{var or__19804__auto____$1 = (cljs.core.async.impl.protocols.closed_QMARK_["_"]);if(or__19804__auto____$1)
{return or__19804__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Channel.closed?",chan);
}
}
})().call(null,chan);
}
});
cljs.core.async.impl.protocols.Handler = (function (){var obj28956 = {};return obj28956;
})();
cljs.core.async.impl.protocols.active_QMARK_ = (function active_QMARK_(h){if((function (){var and__19792__auto__ = h;if(and__19792__auto__)
{return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1;
} else
{return and__19792__auto__;
}
})())
{return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(h);
} else
{var x__20431__auto__ = (((h == null))?null:h);return (function (){var or__19804__auto__ = (cljs.core.async.impl.protocols.active_QMARK_[goog.typeOf(x__20431__auto__)]);if(or__19804__auto__)
{return or__19804__auto__;
} else
{var or__19804__auto____$1 = (cljs.core.async.impl.protocols.active_QMARK_["_"]);if(or__19804__auto____$1)
{return or__19804__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Handler.active?",h);
}
}
})().call(null,h);
}
});
cljs.core.async.impl.protocols.commit = (function commit(h){if((function (){var and__19792__auto__ = h;if(and__19792__auto__)
{return h.cljs$core$async$impl$protocols$Handler$commit$arity$1;
} else
{return and__19792__auto__;
}
})())
{return h.cljs$core$async$impl$protocols$Handler$commit$arity$1(h);
} else
{var x__20431__auto__ = (((h == null))?null:h);return (function (){var or__19804__auto__ = (cljs.core.async.impl.protocols.commit[goog.typeOf(x__20431__auto__)]);if(or__19804__auto__)
{return or__19804__auto__;
} else
{var or__19804__auto____$1 = (cljs.core.async.impl.protocols.commit["_"]);if(or__19804__auto____$1)
{return or__19804__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Handler.commit",h);
}
}
})().call(null,h);
}
});
cljs.core.async.impl.protocols.Buffer = (function (){var obj28958 = {};return obj28958;
})();
cljs.core.async.impl.protocols.full_QMARK_ = (function full_QMARK_(b){if((function (){var and__19792__auto__ = b;if(and__19792__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1;
} else
{return and__19792__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(b);
} else
{var x__20431__auto__ = (((b == null))?null:b);return (function (){var or__19804__auto__ = (cljs.core.async.impl.protocols.full_QMARK_[goog.typeOf(x__20431__auto__)]);if(or__19804__auto__)
{return or__19804__auto__;
} else
{var or__19804__auto____$1 = (cljs.core.async.impl.protocols.full_QMARK_["_"]);if(or__19804__auto____$1)
{return or__19804__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Buffer.full?",b);
}
}
})().call(null,b);
}
});
cljs.core.async.impl.protocols.remove_BANG_ = (function remove_BANG_(b){if((function (){var and__19792__auto__ = b;if(and__19792__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1;
} else
{return and__19792__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(b);
} else
{var x__20431__auto__ = (((b == null))?null:b);return (function (){var or__19804__auto__ = (cljs.core.async.impl.protocols.remove_BANG_[goog.typeOf(x__20431__auto__)]);if(or__19804__auto__)
{return or__19804__auto__;
} else
{var or__19804__auto____$1 = (cljs.core.async.impl.protocols.remove_BANG_["_"]);if(or__19804__auto____$1)
{return or__19804__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Buffer.remove!",b);
}
}
})().call(null,b);
}
});
cljs.core.async.impl.protocols.add_BANG__STAR_ = (function add_BANG__STAR_(b,itm){if((function (){var and__19792__auto__ = b;if(and__19792__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2;
} else
{return and__19792__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2(b,itm);
} else
{var x__20431__auto__ = (((b == null))?null:b);return (function (){var or__19804__auto__ = (cljs.core.async.impl.protocols.add_BANG__STAR_[goog.typeOf(x__20431__auto__)]);if(or__19804__auto__)
{return or__19804__auto__;
} else
{var or__19804__auto____$1 = (cljs.core.async.impl.protocols.add_BANG__STAR_["_"]);if(or__19804__auto____$1)
{return or__19804__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Buffer.add!*",b);
}
}
})().call(null,b,itm);
}
});
cljs.core.async.impl.protocols.add_BANG_ = (function() {
var add_BANG_ = null;
var add_BANG___1 = (function (b){return b;
});
var add_BANG___2 = (function (b,itm){if(!((itm == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"itm","itm",-1640426917,null)))))].join('')));
}
return cljs.core.async.impl.protocols.add_BANG__STAR_.call(null,b,itm);
});
add_BANG_ = function(b,itm){
switch(arguments.length){
case 1:
return add_BANG___1.call(this,b);
case 2:
return add_BANG___2.call(this,b,itm);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_BANG_.cljs$core$IFn$_invoke$arity$1 = add_BANG___1;
add_BANG_.cljs$core$IFn$_invoke$arity$2 = add_BANG___2;
return add_BANG_;
})()
;
cljs.core.async.impl.protocols.UnblockingBuffer = (function (){var obj28960 = {};return obj28960;
})();
}
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.buffers')) {
goog.provide('cljs.core.async.impl.buffers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.buffers.acopy = (function acopy(src,src_start,dest,dest_start,len){var cnt = 0;while(true){
if((cnt < len))
{(dest[(dest_start + cnt)] = (src[(src_start + cnt)]));
{
var G__28896 = (cnt + 1);
cnt = G__28896;
continue;
}
} else
{return null;
}
break;
}
});

/**
* @constructor
*/
cljs.core.async.impl.buffers.RingBuffer = (function (head,tail,length,arr){
this.head = head;
this.tail = tail;
this.length = length;
this.arr = arr;
})
cljs.core.async.impl.buffers.RingBuffer.cljs$lang$type = true;
cljs.core.async.impl.buffers.RingBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/RingBuffer";
cljs.core.async.impl.buffers.RingBuffer.cljs$lang$ctorPrWriter = (function (this__20371__auto__,writer__20372__auto__,opt__20373__auto__){return cljs.core._write.call(null,writer__20372__auto__,"cljs.core.async.impl.buffers/RingBuffer");
});
cljs.core.async.impl.buffers.RingBuffer.prototype.pop = (function (){var self__ = this;
var _ = this;if((self__.length === 0))
{return null;
} else
{var x = (self__.arr[self__.tail]);(self__.arr[self__.tail] = null);
self__.tail = ((self__.tail + 1) % self__.arr.length);
self__.length = (self__.length - 1);
return x;
}
});
cljs.core.async.impl.buffers.RingBuffer.prototype.unshift = (function (x){var self__ = this;
var _ = this;(self__.arr[self__.head] = x);
self__.head = ((self__.head + 1) % self__.arr.length);
self__.length = (self__.length + 1);
return null;
});
cljs.core.async.impl.buffers.RingBuffer.prototype.unbounded_unshift = (function (x){var self__ = this;
var this$ = this;if(((self__.length + 1) === self__.arr.length))
{this$.resize();
} else
{}
return this$.unshift(x);
});
cljs.core.async.impl.buffers.RingBuffer.prototype.resize = (function (){var self__ = this;
var _ = this;var new_arr_size = (self__.arr.length * 2);var new_arr = (new Array(new_arr_size));if((self__.tail < self__.head))
{cljs.core.async.impl.buffers.acopy.call(null,self__.arr,self__.tail,new_arr,0,self__.length);
self__.tail = 0;
self__.head = self__.length;
return self__.arr = new_arr;
} else
{if((self__.tail > self__.head))
{cljs.core.async.impl.buffers.acopy.call(null,self__.arr,self__.tail,new_arr,0,(self__.arr.length - self__.tail));
cljs.core.async.impl.buffers.acopy.call(null,self__.arr,0,new_arr,(self__.arr.length - self__.tail),self__.head);
self__.tail = 0;
self__.head = self__.length;
return self__.arr = new_arr;
} else
{if((self__.tail === self__.head))
{self__.tail = 0;
self__.head = 0;
return self__.arr = new_arr;
} else
{return null;
}
}
}
});
cljs.core.async.impl.buffers.RingBuffer.prototype.cleanup = (function (keep_QMARK_){var self__ = this;
var this$ = this;var n__20652__auto__ = self__.length;var x = 0;while(true){
if((x < n__20652__auto__))
{var v_28897 = this$.pop();if(keep_QMARK_.call(null,v_28897))
{this$.unshift(v_28897);
} else
{}
{
var G__28898 = (x + 1);
x = G__28898;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.async.impl.buffers.__GT_RingBuffer = (function __GT_RingBuffer(head,tail,length,arr){return (new cljs.core.async.impl.buffers.RingBuffer(head,tail,length,arr));
});
cljs.core.async.impl.buffers.ring_buffer = (function ring_buffer(n){if((n > 0))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't create a ring buffer of size 0"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,">",">",-1640531465,null),new cljs.core.Symbol(null,"n","n",-1640531417,null),0)))].join('')));
}
return (new cljs.core.async.impl.buffers.RingBuffer(0,0,0,(new Array(n))));
});

/**
* @constructor
*/
cljs.core.async.impl.buffers.FixedBuffer = (function (buf,n){
this.buf = buf;
this.n = n;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$type = true;
cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/FixedBuffer";
cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$ctorPrWriter = (function (this__20371__auto__,writer__20372__auto__,opt__20373__auto__){return cljs.core._write.call(null,writer__20372__auto__,"cljs.core.async.impl.buffers/FixedBuffer");
});
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.length;
});
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = true;
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return (self__.buf.length === self__.n);
});
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.pop();
});
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2 = (function (this$,itm){var self__ = this;
var this$__$1 = this;self__.buf.unbounded_unshift(itm);
return this$__$1;
});
cljs.core.async.impl.buffers.__GT_FixedBuffer = (function __GT_FixedBuffer(buf,n){return (new cljs.core.async.impl.buffers.FixedBuffer(buf,n));
});
cljs.core.async.impl.buffers.fixed_buffer = (function fixed_buffer(n){return (new cljs.core.async.impl.buffers.FixedBuffer(cljs.core.async.impl.buffers.ring_buffer.call(null,n),n));
});

/**
* @constructor
*/
cljs.core.async.impl.buffers.DroppingBuffer = (function (buf,n){
this.buf = buf;
this.n = n;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$type = true;
cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/DroppingBuffer";
cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$ctorPrWriter = (function (this__20371__auto__,writer__20372__auto__,opt__20373__auto__){return cljs.core._write.call(null,writer__20372__auto__,"cljs.core.async.impl.buffers/DroppingBuffer");
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.length;
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = true;
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return false;
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.pop();
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2 = (function (this$,itm){var self__ = this;
var this$__$1 = this;if((self__.buf.length === self__.n))
{} else
{self__.buf.unshift(itm);
}
return this$__$1;
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$UnblockingBuffer$ = true;
cljs.core.async.impl.buffers.__GT_DroppingBuffer = (function __GT_DroppingBuffer(buf,n){return (new cljs.core.async.impl.buffers.DroppingBuffer(buf,n));
});
cljs.core.async.impl.buffers.dropping_buffer = (function dropping_buffer(n){return (new cljs.core.async.impl.buffers.DroppingBuffer(cljs.core.async.impl.buffers.ring_buffer.call(null,n),n));
});

/**
* @constructor
*/
cljs.core.async.impl.buffers.SlidingBuffer = (function (buf,n){
this.buf = buf;
this.n = n;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$type = true;
cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/SlidingBuffer";
cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$ctorPrWriter = (function (this__20371__auto__,writer__20372__auto__,opt__20373__auto__){return cljs.core._write.call(null,writer__20372__auto__,"cljs.core.async.impl.buffers/SlidingBuffer");
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.length;
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = true;
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return false;
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.pop();
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2 = (function (this$,itm){var self__ = this;
var this$__$1 = this;if((self__.buf.length === self__.n))
{cljs.core.async.impl.protocols.remove_BANG_.call(null,this$__$1);
} else
{}
self__.buf.unshift(itm);
return this$__$1;
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$UnblockingBuffer$ = true;
cljs.core.async.impl.buffers.__GT_SlidingBuffer = (function __GT_SlidingBuffer(buf,n){return (new cljs.core.async.impl.buffers.SlidingBuffer(buf,n));
});
cljs.core.async.impl.buffers.sliding_buffer = (function sliding_buffer(n){return (new cljs.core.async.impl.buffers.SlidingBuffer(cljs.core.async.impl.buffers.ring_buffer.call(null,n),n));
});
}
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.dispatch')) {
goog.provide('cljs.core.async.impl.dispatch');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.dispatch.message_channel = null;
cljs.core.async.impl.dispatch.tasks = cljs.core.async.impl.buffers.ring_buffer.call(null,32);
cljs.core.async.impl.dispatch.running_QMARK_ = false;
cljs.core.async.impl.dispatch.queued_QMARK_ = false;
cljs.core.async.impl.dispatch.TASK_BATCH_SIZE = 1024;
cljs.core.async.impl.dispatch.process_messages = (function process_messages(){cljs.core.async.impl.dispatch.running_QMARK_ = true;
cljs.core.async.impl.dispatch.queued_QMARK_ = false;
var count_28946 = 0;while(true){
var m_28947 = cljs.core.async.impl.dispatch.tasks.pop();if((m_28947 == null))
{} else
{m_28947.call(null);
if((count_28946 < cljs.core.async.impl.dispatch.TASK_BATCH_SIZE))
{{
var G__28948 = (count_28946 + 1);
count_28946 = G__28948;
continue;
}
} else
{}
}
break;
}
cljs.core.async.impl.dispatch.running_QMARK_ = false;
if((cljs.core.async.impl.dispatch.tasks.length > 0))
{return cljs.core.async.impl.dispatch.queue_dispatcher.call(null);
} else
{return null;
}
});
if(typeof MessageChannel !== 'undefined')
{cljs.core.async.impl.dispatch.message_channel = (new MessageChannel());
cljs.core.async.impl.dispatch.message_channel.port1.onmessage = (function (msg){return cljs.core.async.impl.dispatch.process_messages.call(null);
});
} else
{}
cljs.core.async.impl.dispatch.queue_dispatcher = (function queue_dispatcher(){if(cljs.core.truth_((function (){var and__19792__auto__ = cljs.core.async.impl.dispatch.queued_QMARK_;if(and__19792__auto__)
{return cljs.core.async.impl.dispatch.running_QMARK_;
} else
{return and__19792__auto__;
}
})()))
{return null;
} else
{cljs.core.async.impl.dispatch.queued_QMARK_ = true;
if(typeof MessageChannel !== 'undefined')
{return cljs.core.async.impl.dispatch.message_channel.port2.postMessage(0);
} else
{if(typeof setImmediate !== 'undefined')
{return setImmediate(cljs.core.async.impl.dispatch.process_messages);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return setTimeout(cljs.core.async.impl.dispatch.process_messages,0);
} else
{return null;
}
}
}
}
});
cljs.core.async.impl.dispatch.run = (function run(f){cljs.core.async.impl.dispatch.tasks.unbounded_unshift(f);
return cljs.core.async.impl.dispatch.queue_dispatcher.call(null);
});
cljs.core.async.impl.dispatch.queue_delay = (function queue_delay(f,delay){return setTimeout(f,delay);
});
}
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.channels')) {
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.channels.box = (function box(val){if(typeof cljs.core.async.impl.channels.t28902 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.channels.t28902 = (function (val,box,meta28903){
this.val = val;
this.box = box;
this.meta28903 = meta28903;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
cljs.core.async.impl.channels.t28902.cljs$lang$type = true;
cljs.core.async.impl.channels.t28902.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t28902";
cljs.core.async.impl.channels.t28902.cljs$lang$ctorPrWriter = (function (this__20371__auto__,writer__20372__auto__,opt__20373__auto__){return cljs.core._write.call(null,writer__20372__auto__,"cljs.core.async.impl.channels/t28902");
});
cljs.core.async.impl.channels.t28902.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.val;
});
cljs.core.async.impl.channels.t28902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28904){var self__ = this;
var _28904__$1 = this;return self__.meta28903;
});
cljs.core.async.impl.channels.t28902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28904,meta28903__$1){var self__ = this;
var _28904__$1 = this;return (new cljs.core.async.impl.channels.t28902(self__.val,self__.box,meta28903__$1));
});
cljs.core.async.impl.channels.__GT_t28902 = (function __GT_t28902(val__$1,box__$1,meta28903){return (new cljs.core.async.impl.channels.t28902(val__$1,box__$1,meta28903));
});
}
return (new cljs.core.async.impl.channels.t28902(val,box,null));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
})
cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;
cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";
cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__20374__auto__,writer__20375__auto__,opts__20376__auto__){return cljs.core._write.call(null,writer__20375__auto__,"cljs.core.async.impl.channels/PutBox");
});
cljs.core.async.impl.channels.__GT_PutBox = (function __GT_PutBox(handler,val){return (new cljs.core.async.impl.channels.PutBox(handler,val));
});
cljs.core.async.impl.channels.put_active_QMARK_ = (function put_active_QMARK_(box){return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = 64;
cljs.core.async.impl.channels.MMC = (function (){var obj28906 = {};return obj28906;
})();
cljs.core.async.impl.channels.abort = (function abort(this$){if((function (){var and__19792__auto__ = this$;if(and__19792__auto__)
{return this$.cljs$core$async$impl$channels$MMC$abort$arity$1;
} else
{return and__19792__auto__;
}
})())
{return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else
{var x__20431__auto__ = (((this$ == null))?null:this$);return (function (){var or__19804__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__20431__auto__)]);if(or__19804__auto__)
{return or__19804__auto__;
} else
{var or__19804__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);if(or__19804__auto____$1)
{return or__19804__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"MMC.abort",this$);
}
}
})().call(null,this$);
}
});

/**
* @constructor
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
})
cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;
cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";
cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__20371__auto__,writer__20372__auto__,opt__20373__auto__){return cljs.core._write.call(null,writer__20372__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.closed;
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(self__.closed)
{return null;
} else
{self__.closed = true;
if(cljs.core.truth_((function (){var and__19792__auto__ = self__.buf;if(cljs.core.truth_(and__19792__auto__))
{return (self__.puts.length === 0);
} else
{return and__19792__auto__;
}
})()))
{self__.add_BANG_.call(null,self__.buf);
} else
{}
while(true){
var taker_28921 = self__.takes.pop();if((taker_28921 == null))
{} else
{if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_28921))
{var take_cb_28922 = cljs.core.async.impl.protocols.commit.call(null,taker_28921);var val_28923 = (cljs.core.truth_((function (){var and__19792__auto__ = self__.buf;if(cljs.core.truth_(and__19792__auto__))
{return (cljs.core.count.call(null,self__.buf) > 0);
} else
{return and__19792__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_28922,val_28923,taker_28921,this$__$1){
return (function (){return take_cb_28922.call(null,val_28923);
});})(take_cb_28922,val_28923,taker_28921,this$__$1))
);
} else
{}
{
continue;
}
}
break;
}
return null;
}
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){var self__ = this;
var this$__$1 = this;if(!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))
{return null;
} else
{if((!((self__.buf == null))) && ((cljs.core.count.call(null,self__.buf) > 0)))
{var _ = cljs.core.async.impl.protocols.commit.call(null,handler);var retval = cljs.core.async.impl.channels.box.call(null,cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf));while(true){
if(cljs.core.truth_(cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf)))
{} else
{var putter_28924 = self__.puts.pop();if((putter_28924 == null))
{} else
{var put_handler_28925 = putter_28924.handler;var val_28926 = putter_28924.val;if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_28925))
{var put_cb_28927 = cljs.core.async.impl.protocols.commit.call(null,put_handler_28925);cljs.core.async.impl.protocols.commit.call(null,handler);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_28927,put_handler_28925,val_28926,putter_28924,_,retval,this$__$1){
return (function (){return put_cb_28927.call(null,true);
});})(put_cb_28927,put_handler_28925,val_28926,putter_28924,_,retval,this$__$1))
);
if(cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val_28926)))
{cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else
{}
} else
{}
{
continue;
}
}
}
break;
}
return retval;
} else
{var putter = (function (){while(true){
var putter = self__.puts.pop();if(cljs.core.truth_(putter))
{if(cljs.core.async.impl.protocols.active_QMARK_.call(null,putter.handler))
{return putter;
} else
{{
continue;
}
}
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(putter))
{var put_cb = cljs.core.async.impl.protocols.commit.call(null,putter.handler);cljs.core.async.impl.protocols.commit.call(null,handler);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb,putter,this$__$1){
return (function (){return put_cb.call(null,true);
});})(put_cb,putter,this$__$1))
);
return cljs.core.async.impl.channels.box.call(null,putter.val);
} else
{if(cljs.core.truth_(self__.closed))
{if(cljs.core.truth_(self__.buf))
{self__.add_BANG_.call(null,self__.buf);
} else
{}
if(cljs.core.truth_((function (){var and__19792__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);if(cljs.core.truth_(and__19792__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,handler);
} else
{return and__19792__auto__;
}
})()))
{var has_val = (function (){var and__19792__auto__ = self__.buf;if(cljs.core.truth_(and__19792__auto__))
{return (cljs.core.count.call(null,self__.buf) > 0);
} else
{return and__19792__auto__;
}
})();var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);return cljs.core.async.impl.channels.box.call(null,val);
} else
{return null;
}
} else
{if((self__.dirty_takes > cljs.core.async.impl.channels.MAX_DIRTY))
{self__.dirty_takes = 0;
self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else
{self__.dirty_takes = (self__.dirty_takes + 1);
}
if((self__.takes.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No more than "),cljs.core.str(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str(" pending takes are allowed on a single channel.")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"<","<",-1640531467,null),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",1395928862,null),new cljs.core.Symbol(null,"takes","takes",-1530407291,null)),new cljs.core.Symbol("impl","MAX-QUEUE-SIZE","impl/MAX-QUEUE-SIZE",-1989946393,null))))].join('')));
}
self__.takes.unbounded_unshift(handler);
return null;
}
}
}
}
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){var self__ = this;
var this$__$1 = this;if(!((val == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't put nil in on a channel"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"val","val",-1640415014,null)))))].join('')));
}
var closed__$1 = self__.closed;if((closed__$1) || (!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler))))
{return cljs.core.async.impl.channels.box.call(null,!(closed__$1));
} else
{if(cljs.core.truth_((function (){var and__19792__auto__ = self__.buf;if(cljs.core.truth_(and__19792__auto__))
{return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else
{return and__19792__auto__;
}
})()))
{cljs.core.async.impl.protocols.commit.call(null,handler);
var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));while(true){
if(((self__.takes.length > 0)) && ((cljs.core.count.call(null,self__.buf) > 0)))
{var taker_28928 = self__.takes.pop();if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_28928))
{var take_cb_28929 = cljs.core.async.impl.protocols.commit.call(null,taker_28928);var val_28930__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_28929,val_28930__$1,taker_28928,done_QMARK_,closed__$1,this$__$1){
return (function (){return take_cb_28929.call(null,val_28930__$1);
});})(take_cb_28929,val_28930__$1,taker_28928,done_QMARK_,closed__$1,this$__$1))
);
} else
{{
continue;
}
}
} else
{}
break;
}
if(done_QMARK_)
{cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else
{}
return cljs.core.async.impl.channels.box.call(null,true);
} else
{var taker = (function (){while(true){
var taker = self__.takes.pop();if(cljs.core.truth_(taker))
{if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker)))
{return taker;
} else
{{
continue;
}
}
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(taker))
{var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);cljs.core.async.impl.protocols.commit.call(null,handler);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb,taker,closed__$1,this$__$1){
return (function (){return take_cb.call(null,val);
});})(take_cb,taker,closed__$1,this$__$1))
);
return cljs.core.async.impl.channels.box.call(null,true);
} else
{if((self__.dirty_puts > cljs.core.async.impl.channels.MAX_DIRTY))
{self__.dirty_puts = 0;
self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else
{self__.dirty_puts = (self__.dirty_puts + 1);
}
if((self__.puts.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No more than "),cljs.core.str(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str(" pending puts are allowed on a single channel."),cljs.core.str(" Consider using a windowed buffer.")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"<","<",-1640531467,null),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",1395928862,null),new cljs.core.Symbol(null,"puts","puts",-1637078787,null)),new cljs.core.Symbol("impl","MAX-QUEUE-SIZE","impl/MAX-QUEUE-SIZE",-1989946393,null))))].join('')));
}
self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
return null;
}
}
}
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;while(true){
var putter_28931 = self__.puts.pop();if((putter_28931 == null))
{} else
{var put_handler_28932 = putter_28931.handler;var val_28933 = putter_28931.val;if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_28932))
{var put_cb_28934 = cljs.core.async.impl.protocols.commit.call(null,put_handler_28932);cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_28934,put_handler_28932,val_28933,putter_28931,this$__$1){
return (function (){return put_cb_28934.call(null,true);
});})(put_cb_28934,put_handler_28932,val_28933,putter_28931,this$__$1))
);
} else
{{
continue;
}
}
}
break;
}
self__.puts.cleanup(cljs.core.constantly.call(null,false));
return cljs.core.async.impl.protocols.close_BANG_.call(null,this$__$1);
});
cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function __GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});
cljs.core.async.impl.channels.ex_handler = (function ex_handler(ex){console.log(ex);
return null;
});
cljs.core.async.impl.channels.handle = (function handle(buf,exh,t){var else$ = (function (){var or__19804__auto__ = exh;if(cljs.core.truth_(or__19804__auto__))
{return or__19804__auto__;
} else
{return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);if((else$ == null))
{return buf;
} else
{return cljs.core.async.impl.protocols.add_BANG_.call(null,buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function() {
var chan = null;
var chan__1 = (function (buf){return chan.call(null,buf,null);
});
var chan__2 = (function (buf,xform){return chan.call(null,buf,xform,null);
});
var chan__3 = (function (buf,xform,exh){return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,32),0,cljs.core.async.impl.buffers.ring_buffer.call(null,32),0,buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?xform.call(null,cljs.core.async.impl.protocols.add_BANG_):cljs.core.async.impl.protocols.add_BANG_);return ((function (add_BANG_){
return (function() {
var G__28935 = null;
var G__28935__1 = (function (buf__$1){try{return add_BANG_.call(null,buf__$1);
}catch (e28909){var t = e28909;return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__28935__2 = (function (buf__$1,val){try{return add_BANG_.call(null,buf__$1,val);
}catch (e28910){var t = e28910;return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__28935 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__28935__1.call(this,buf__$1);
case 2:
return G__28935__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__28935;
})()
;})(add_BANG_))
})()));
});
chan = function(buf,xform,exh){
switch(arguments.length){
case 1:
return chan__1.call(this,buf);
case 2:
return chan__2.call(this,buf,xform);
case 3:
return chan__3.call(this,buf,xform,exh);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
}
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.timers')) {
goog.provide('cljs.core.async.impl.timers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.timers.MAX_LEVEL = 15;
cljs.core.async.impl.timers.P = (1 / 2);
cljs.core.async.impl.timers.random_level = (function() {
var random_level = null;
var random_level__0 = (function (){return random_level.call(null,0);
});
var random_level__1 = (function (level){while(true){
if(((Math.random() < cljs.core.async.impl.timers.P)) && ((level < cljs.core.async.impl.timers.MAX_LEVEL)))
{{
var G__28981 = (level + 1);
level = G__28981;
continue;
}
} else
{return level;
}
break;
}
});
random_level = function(level){
switch(arguments.length){
case 0:
return random_level__0.call(this);
case 1:
return random_level__1.call(this,level);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
random_level.cljs$core$IFn$_invoke$arity$0 = random_level__0;
random_level.cljs$core$IFn$_invoke$arity$1 = random_level__1;
return random_level;
})()
;

/**
* @constructor
*/
cljs.core.async.impl.timers.SkipListNode = (function (key,val,forward){
this.key = key;
this.val = val;
this.forward = forward;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155872256;
})
cljs.core.async.impl.timers.SkipListNode.cljs$lang$type = true;
cljs.core.async.impl.timers.SkipListNode.cljs$lang$ctorStr = "cljs.core.async.impl.timers/SkipListNode";
cljs.core.async.impl.timers.SkipListNode.cljs$lang$ctorPrWriter = (function (this__20371__auto__,writer__20372__auto__,opt__20373__auto__){return cljs.core._write.call(null,writer__20372__auto__,"cljs.core.async.impl.timers/SkipListNode");
});
cljs.core.async.impl.timers.SkipListNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var self__ = this;
var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});
cljs.core.async.impl.timers.SkipListNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.val),self__.key);
});
cljs.core.async.impl.timers.__GT_SkipListNode = (function __GT_SkipListNode(key,val,forward){return (new cljs.core.async.impl.timers.SkipListNode(key,val,forward));
});
cljs.core.async.impl.timers.skip_list_node = (function() {
var skip_list_node = null;
var skip_list_node__1 = (function (level){return skip_list_node.call(null,null,null,level);
});
var skip_list_node__3 = (function (k,v,level){var arr = (new Array((level + 1)));var i_28982 = 0;while(true){
if((i_28982 < arr.length))
{(arr[i_28982] = null);
{
var G__28983 = (i_28982 + 1);
i_28982 = G__28983;
continue;
}
} else
{}
break;
}
return (new cljs.core.async.impl.timers.SkipListNode(k,v,arr));
});
skip_list_node = function(k,v,level){
switch(arguments.length){
case 1:
return skip_list_node__1.call(this,k);
case 3:
return skip_list_node__3.call(this,k,v,level);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
skip_list_node.cljs$core$IFn$_invoke$arity$1 = skip_list_node__1;
skip_list_node.cljs$core$IFn$_invoke$arity$3 = skip_list_node__3;
return skip_list_node;
})()
;
cljs.core.async.impl.timers.least_greater_node = (function() {
var least_greater_node = null;
var least_greater_node__3 = (function (x,k,level){return least_greater_node.call(null,x,k,level,null);
});
var least_greater_node__4 = (function (x,k,level,update){while(true){
if(!((level < 0)))
{var x__$1 = (function (){var x__$1 = x;while(true){
var temp__4090__auto__ = (x__$1.forward[level]);if(cljs.core.truth_(temp__4090__auto__))
{var x_SINGLEQUOTE_ = temp__4090__auto__;if((x_SINGLEQUOTE_.key < k))
{{
var G__28984 = x_SINGLEQUOTE_;
x__$1 = G__28984;
continue;
}
} else
{return x__$1;
}
} else
{return x__$1;
}
break;
}
})();if((update == null))
{} else
{(update[level] = x__$1);
}
{
var G__28985 = x__$1;
var G__28986 = k;
var G__28987 = (level - 1);
var G__28988 = update;
x = G__28985;
k = G__28986;
level = G__28987;
update = G__28988;
continue;
}
} else
{return x;
}
break;
}
});
least_greater_node = function(x,k,level,update){
switch(arguments.length){
case 3:
return least_greater_node__3.call(this,x,k,level);
case 4:
return least_greater_node__4.call(this,x,k,level,update);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
least_greater_node.cljs$core$IFn$_invoke$arity$3 = least_greater_node__3;
least_greater_node.cljs$core$IFn$_invoke$arity$4 = least_greater_node__4;
return least_greater_node;
})()
;

/**
* @constructor
*/
cljs.core.async.impl.timers.SkipList = (function (header,level){
this.header = header;
this.level = level;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155872256;
})
cljs.core.async.impl.timers.SkipList.cljs$lang$type = true;
cljs.core.async.impl.timers.SkipList.cljs$lang$ctorStr = "cljs.core.async.impl.timers/SkipList";
cljs.core.async.impl.timers.SkipList.cljs$lang$ctorPrWriter = (function (this__20371__auto__,writer__20372__auto__,opt__20373__auto__){return cljs.core._write.call(null,writer__20372__auto__,"cljs.core.async.impl.timers/SkipList");
});
cljs.core.async.impl.timers.SkipList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var self__ = this;
var coll__$1 = this;var pr_pair = ((function (coll__$1){
return (function (keyval){return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});})(coll__$1))
;return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"{",", ","}",opts,coll__$1);
});
cljs.core.async.impl.timers.SkipList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var iter = ((function (coll__$1){
return (function iter(node){return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){if((node == null))
{return null;
} else
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node.key,node.val], null),iter.call(null,(node.forward[0])));
}
});})(coll__$1))
,null,null));
});})(coll__$1))
;
return iter.call(null,(self__.header.forward[0]));
});
cljs.core.async.impl.timers.SkipList.prototype.put = (function (k,v){var self__ = this;
var coll = this;var update = (new Array(cljs.core.async.impl.timers.MAX_LEVEL));var x = cljs.core.async.impl.timers.least_greater_node.call(null,self__.header,k,self__.level,update);var x__$1 = (x.forward[0]);if((!((x__$1 == null))) && ((x__$1.key === k)))
{return x__$1.val = v;
} else
{var new_level = cljs.core.async.impl.timers.random_level.call(null);if((new_level > self__.level))
{var i_28989 = (self__.level + 1);while(true){
if((i_28989 <= (new_level + 1)))
{(update[i_28989] = self__.header);
{
var G__28990 = (i_28989 + 1);
i_28989 = G__28990;
continue;
}
} else
{}
break;
}
self__.level = new_level;
} else
{}
var x__$2 = cljs.core.async.impl.timers.skip_list_node.call(null,k,v,(new Array(new_level)));var i = 0;while(true){
if((i <= self__.level))
{var links = (update[i]).forward;(x__$2.forward[i] = (links[i]));
return (links[i] = x__$2);
} else
{return null;
}
break;
}
}
});
cljs.core.async.impl.timers.SkipList.prototype.remove = (function (k){var self__ = this;
var coll = this;var update = (new Array(cljs.core.async.impl.timers.MAX_LEVEL));var x = cljs.core.async.impl.timers.least_greater_node.call(null,self__.header,k,self__.level,update);var x__$1 = (x.forward[0]);if((!((x__$1 == null))) && ((x__$1.key === k)))
{var i_28991 = 0;while(true){
if((i_28991 <= self__.level))
{var links_28992 = (update[i_28991]).forward;if(((links_28992[i_28991]) === x__$1))
{(links_28992[i_28991] = (x__$1.forward[i_28991]));
{
var G__28993 = (i_28991 + 1);
i_28991 = G__28993;
continue;
}
} else
{{
var G__28994 = (i_28991 + 1);
i_28991 = G__28994;
continue;
}
}
} else
{}
break;
}
while(true){
if(((self__.level > 0)) && (((self__.header.forward[self__.level]) == null)))
{self__.level = (self__.level - 1);
{
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.async.impl.timers.SkipList.prototype.ceilingEntry = (function (k){var self__ = this;
var coll = this;var x = self__.header;var level__$1 = self__.level;while(true){
if(!((level__$1 < 0)))
{var nx = (function (){var x__$1 = x;while(true){
var x_SINGLEQUOTE_ = (x__$1.forward[level__$1]);if((x_SINGLEQUOTE_ == null))
{return null;
} else
{if((x_SINGLEQUOTE_.key >= k))
{return x_SINGLEQUOTE_;
} else
{{
var G__28995 = x_SINGLEQUOTE_;
x__$1 = G__28995;
continue;
}
}
}
break;
}
})();if(!((nx == null)))
{{
var G__28996 = nx;
var G__28997 = (level__$1 - 1);
x = G__28996;
level__$1 = G__28997;
continue;
}
} else
{{
var G__28998 = x;
var G__28999 = (level__$1 - 1);
x = G__28998;
level__$1 = G__28999;
continue;
}
}
} else
{if((x === self__.header))
{return null;
} else
{return x;
}
}
break;
}
});
cljs.core.async.impl.timers.SkipList.prototype.floorEntry = (function (k){var self__ = this;
var coll = this;var x = self__.header;var level__$1 = self__.level;while(true){
if(!((level__$1 < 0)))
{var nx = (function (){var x__$1 = x;while(true){
var x_SINGLEQUOTE_ = (x__$1.forward[level__$1]);if(!((x_SINGLEQUOTE_ == null)))
{if((x_SINGLEQUOTE_.key > k))
{return x__$1;
} else
{{
var G__29000 = x_SINGLEQUOTE_;
x__$1 = G__29000;
continue;
}
}
} else
{if((level__$1 === 0))
{return x__$1;
} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(nx))
{{
var G__29001 = nx;
var G__29002 = (level__$1 - 1);
x = G__29001;
level__$1 = G__29002;
continue;
}
} else
{{
var G__29003 = x;
var G__29004 = (level__$1 - 1);
x = G__29003;
level__$1 = G__29004;
continue;
}
}
} else
{if((x === self__.header))
{return null;
} else
{return x;
}
}
break;
}
});
cljs.core.async.impl.timers.__GT_SkipList = (function __GT_SkipList(header,level){return (new cljs.core.async.impl.timers.SkipList(header,level));
});
cljs.core.async.impl.timers.skip_list = (function skip_list(){return (new cljs.core.async.impl.timers.SkipList(cljs.core.async.impl.timers.skip_list_node.call(null,0),0));
});
cljs.core.async.impl.timers.timeouts_map = cljs.core.async.impl.timers.skip_list.call(null);
cljs.core.async.impl.timers.TIMEOUT_RESOLUTION_MS = 10;
/**
* returns a channel that will close after msecs
*/
cljs.core.async.impl.timers.timeout = (function timeout(msecs){var timeout__$1 = ((new Date()).valueOf() + msecs);var me = cljs.core.async.impl.timers.timeouts_map.ceilingEntry(timeout__$1);var or__19804__auto__ = (cljs.core.truth_((function (){var and__19792__auto__ = me;if(cljs.core.truth_(and__19792__auto__))
{return (me.key < (timeout__$1 + cljs.core.async.impl.timers.TIMEOUT_RESOLUTION_MS));
} else
{return and__19792__auto__;
}
})())?me.val:null);if(cljs.core.truth_(or__19804__auto__))
{return or__19804__auto__;
} else
{var timeout_channel = cljs.core.async.impl.channels.chan.call(null,null);cljs.core.async.impl.timers.timeouts_map.put(timeout__$1,timeout_channel);
cljs.core.async.impl.dispatch.queue_delay.call(null,((function (timeout_channel,or__19804__auto__,timeout__$1,me){
return (function (){cljs.core.async.impl.timers.timeouts_map.remove(timeout__$1);
return cljs.core.async.impl.protocols.close_BANG_.call(null,timeout_channel);
});})(timeout_channel,or__19804__auto__,timeout__$1,me))
,msecs);
return timeout_channel;
}
});
}
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.ioc-helpers')) {
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = 0;
cljs.core.async.impl.ioc_helpers.STATE_IDX = 1;
cljs.core.async.impl.ioc_helpers.VALUE_IDX = 2;
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = 3;
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = 4;
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = 5;
cljs.core.async.impl.ioc_helpers.USER_START_IDX = 6;
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){return cljs.core.keyword_identical_QMARK_.call(null,(state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),new cljs.core.Keyword(null,"finished","finished",4635210724));
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t28826 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t28826 = (function (f,fn_handler,meta28827){
this.f = f;
this.fn_handler = fn_handler;
this.meta28827 = meta28827;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t28826.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t28826.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t28826";
cljs.core.async.impl.ioc_helpers.t28826.cljs$lang$ctorPrWriter = (function (this__20371__auto__,writer__20372__auto__,opt__20373__auto__){return cljs.core._write.call(null,writer__20372__auto__,"cljs.core.async.impl.ioc-helpers/t28826");
});
cljs.core.async.impl.ioc_helpers.t28826.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t28826.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t28826.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t28826.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28828){var self__ = this;
var _28828__$1 = this;return self__.meta28827;
});
cljs.core.async.impl.ioc_helpers.t28826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28828,meta28827__$1){var self__ = this;
var _28828__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t28826(self__.f,self__.fn_handler,meta28827__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t28826 = (function __GT_t28826(f__$1,fn_handler__$1,meta28827){return (new cljs.core.async.impl.ioc_helpers.t28826(f__$1,fn_handler__$1,meta28827));
});
}
return (new cljs.core.async.impl.ioc_helpers.t28826(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e28830){if((e28830 instanceof Object))
{var ex = e28830;cljs.core.async.impl.protocols.close_BANG_.call(null,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.USER_START_IDX));
throw ex;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28830;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4090__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){var statearr_28833_28876 = state;(statearr_28833_28876[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_28833_28876[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_28834_28877 = state;(statearr_28834_28877[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_28834_28877[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (ret_val){var statearr_28837_28878 = state;(statearr_28837_28878[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);
(statearr_28837_28878[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_28838_28879 = state;(statearr_28838_28879[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_28838_28879[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__28839){var map__28844 = p__28839;var map__28844__$1 = ((cljs.core.seq_QMARK_.call(null,map__28844))?cljs.core.apply.call(null,cljs.core.hash_map,map__28844):map__28844);var opts = map__28844__$1;var statearr_28845_28880 = state;(statearr_28845_28880[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts.call(null,((function (map__28844,map__28844__$1,opts){
return (function (val){var statearr_28846_28881 = state;(statearr_28846_28881[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28844,map__28844__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;var statearr_28847_28882 = state;(statearr_28847_28882[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__28839 = null;if (arguments.length > 3) {
  p__28839 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__28839);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__28883){
var state = cljs.core.first(arglist__28883);
arglist__28883 = cljs.core.next(arglist__28883);
var cont_block = cljs.core.first(arglist__28883);
arglist__28883 = cljs.core.next(arglist__28883);
var ports = cljs.core.first(arglist__28883);
var p__28839 = cljs.core.rest(arglist__28883);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__28839);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);if((value == null))
{} else
{cljs.core.async.impl.protocols.put_BANG_.call(null,c,value,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,((function (c){
return (function (){return null;
});})(c))
));
}
cljs.core.async.impl.protocols.close_BANG_.call(null,c);
return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20385__auto__){var self__ = this;
var this__20385__auto____$1 = this;var h__20215__auto__ = self__.__hash;if(!((h__20215__auto__ == null)))
{return h__20215__auto__;
} else
{var h__20215__auto____$1 = cljs.core.hash_imap.call(null,this__20385__auto____$1);self__.__hash = h__20215__auto____$1;
return h__20215__auto____$1;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20390__auto__,k__20391__auto__){var self__ = this;
var this__20390__auto____$1 = this;return cljs.core._lookup.call(null,this__20390__auto____$1,k__20391__auto__,null);
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20392__auto__,k28849,else__20393__auto__){var self__ = this;
var this__20392__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k28849,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893)))
{return self__.catch_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k28849,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687)))
{return self__.catch_exception;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k28849,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429)))
{return self__.finally_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k28849,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097)))
{return self__.continue_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k28849,new cljs.core.Keyword(null,"prev","prev",1017353637)))
{return self__.prev;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k28849,else__20393__auto__);
} else
{return null;
}
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20397__auto__,k__20398__auto__,G__28848){var self__ = this;
var this__20397__auto____$1 = this;var pred__28851 = cljs.core.keyword_identical_QMARK_;var expr__28852 = k__20398__auto__;if(cljs.core.truth_(pred__28851.call(null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),expr__28852)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__28848,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__28851.call(null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),expr__28852)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__28848,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__28851.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),expr__28852)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__28848,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__28851.call(null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),expr__28852)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__28848,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__28851.call(null,new cljs.core.Keyword(null,"prev","prev",1017353637),expr__28852)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__28848,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20398__auto__,G__28848),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20404__auto__,writer__20405__auto__,opts__20406__auto__){var self__ = this;
var this__20404__auto____$1 = this;var pr_pair__20407__auto__ = ((function (this__20404__auto____$1){
return (function (keyval__20408__auto__){return cljs.core.pr_sequential_writer.call(null,writer__20405__auto__,cljs.core.pr_writer,""," ","",opts__20406__auto__,keyval__20408__auto__);
});})(this__20404__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__20405__auto__,pr_pair__20407__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__20406__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",1017353637),self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20395__auto__,entry__20396__auto__){var self__ = this;
var this__20395__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__20396__auto__))
{return cljs.core._assoc.call(null,this__20395__auto____$1,cljs.core._nth.call(null,entry__20396__auto__,0),cljs.core._nth.call(null,entry__20396__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__20395__auto____$1,entry__20396__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20402__auto__){var self__ = this;
var this__20402__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",1017353637),self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20394__auto__){var self__ = this;
var this__20394__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20386__auto__,other__20387__auto__){var self__ = this;
var this__20386__auto____$1 = this;if(cljs.core.truth_((function (){var and__19792__auto__ = other__20387__auto__;if(cljs.core.truth_(and__19792__auto__))
{return ((this__20386__auto____$1.constructor === other__20387__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__20386__auto____$1,other__20387__auto__));
} else
{return and__19792__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20389__auto__,G__28848){var self__ = this;
var this__20389__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__28848,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20384__auto__){var self__ = this;
var this__20384__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20388__auto__){var self__ = this;
var this__20388__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20399__auto__,k__20400__auto__){var self__ = this;
var this__20399__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),null,new cljs.core.Keyword(null,"prev","prev",1017353637),null], null), null),k__20400__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20399__auto____$1),self__.__meta),k__20400__auto__);
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20400__auto__)),null));
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__20424__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__20424__auto__,writer__20425__auto__){return cljs.core._write.call(null,writer__20425__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev));
});
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__28850){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(G__28850),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(G__28850),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(G__28850),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(G__28850),new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(G__28850),null,cljs.core.dissoc.call(null,G__28850,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),new cljs.core.Keyword(null,"prev","prev",1017353637))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_28855 = state;(statearr_28855[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame.call(null,catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_28855;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__19792__auto__ = exception;if(cljs.core.truth_(and__19792__auto__))
{return cljs.core.not.call(null,exception_frame);
} else
{return and__19792__auto__;
}
})()))
{throw exception;
} else
{if(cljs.core.truth_((function (){var and__19792__auto__ = exception;if(cljs.core.truth_(and__19792__auto__))
{var and__19792__auto____$1 = catch_block;if(cljs.core.truth_(and__19792__auto____$1))
{return (exception instanceof catch_exception);
} else
{return and__19792__auto____$1;
}
} else
{return and__19792__auto__;
}
})()))
{var statearr_28861 = state;(statearr_28861[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_28861[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_28861[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_28861[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null));
return statearr_28861;
} else
{if(cljs.core.truth_((function (){var and__19792__auto__ = exception;if(cljs.core.truth_(and__19792__auto__))
{return (cljs.core.not.call(null,catch_block)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__19792__auto__;
}
})()))
{var statearr_28862_28884 = state;(statearr_28862_28884[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__28885 = state;
state = G__28885;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__19792__auto__ = exception;if(cljs.core.truth_(and__19792__auto__))
{var and__19792__auto____$1 = cljs.core.not.call(null,catch_block);if(and__19792__auto____$1)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__19792__auto____$1;
}
} else
{return and__19792__auto__;
}
})()))
{var statearr_28863 = state;(statearr_28863[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_28863[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_28863;
} else
{if(cljs.core.truth_((function (){var and__19792__auto__ = cljs.core.not.call(null,exception);if(and__19792__auto__)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__19792__auto__;
}
})()))
{var statearr_28864 = state;(statearr_28864[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_28864[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_28864;
} else
{if((cljs.core.not.call(null,exception)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_28865 = state;(statearr_28865[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_28865[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_28865;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error("No matching clause"));
} else
{return null;
}
}
}
}
}
}
}
break;
}
});
}
if(!lt.util.load.provided_QMARK_('cljs.core.async')) {
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t25744 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25744 = (function (f,fn_handler,meta25745){
this.f = f;
this.fn_handler = fn_handler;
this.meta25745 = meta25745;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25744.cljs$lang$type = true;
cljs.core.async.t25744.cljs$lang$ctorStr = "cljs.core.async/t25744";
cljs.core.async.t25744.cljs$lang$ctorPrWriter = (function (this__20371__auto__,writer__20372__auto__,opt__20373__auto__){return cljs.core._write.call(null,writer__20372__auto__,"cljs.core.async/t25744");
});
cljs.core.async.t25744.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25744.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t25744.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t25744.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25746){var self__ = this;
var _25746__$1 = this;return self__.meta25745;
});
cljs.core.async.t25744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25746,meta25745__$1){var self__ = this;
var _25746__$1 = this;return (new cljs.core.async.t25744(self__.f,self__.fn_handler,meta25745__$1));
});
cljs.core.async.__GT_t25744 = (function __GT_t25744(f__$1,fn_handler__$1,meta25745){return (new cljs.core.async.t25744(f__$1,fn_handler__$1,meta25745));
});
}
return (new cljs.core.async.t25744(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__25748 = buff;if(G__25748)
{var bit__20454__auto__ = null;if(cljs.core.truth_((function (){var or__19804__auto__ = bit__20454__auto__;if(cljs.core.truth_(or__19804__auto__))
{return or__19804__auto__;
} else
{return G__25748.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__25748.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25748);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25748);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",1080054743,null)))].join('')));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_28451 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_28451);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_28451,ret){
return (function (){return fn1.call(null,val_28451);
});})(val_28451,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4090__auto__))
{var ret = temp__4090__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4090__auto__))
{var retb = temp__4090__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4090__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4090__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__20652__auto___28452 = n;var x_28453 = 0;while(true){
if((x_28453 < n__20652__auto___28452))
{(a[x_28453] = 0);
{
var G__28454 = (x_28453 + 1);
x_28453 = G__28454;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__28455 = (i + 1);
i = G__28455;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t25752 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25752 = (function (flag,alt_flag,meta25753){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta25753 = meta25753;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25752.cljs$lang$type = true;
cljs.core.async.t25752.cljs$lang$ctorStr = "cljs.core.async/t25752";
cljs.core.async.t25752.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20371__auto__,writer__20372__auto__,opt__20373__auto__){return cljs.core._write.call(null,writer__20372__auto__,"cljs.core.async/t25752");
});})(flag))
;
cljs.core.async.t25752.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25752.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t25752.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t25752.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25754){var self__ = this;
var _25754__$1 = this;return self__.meta25753;
});})(flag))
;
cljs.core.async.t25752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25754,meta25753__$1){var self__ = this;
var _25754__$1 = this;return (new cljs.core.async.t25752(self__.flag,self__.alt_flag,meta25753__$1));
});})(flag))
;
cljs.core.async.__GT_t25752 = ((function (flag){
return (function __GT_t25752(flag__$1,alt_flag__$1,meta25753){return (new cljs.core.async.t25752(flag__$1,alt_flag__$1,meta25753));
});})(flag))
;
}
return (new cljs.core.async.t25752(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t25758 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25758 = (function (cb,flag,alt_handler,meta25759){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta25759 = meta25759;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25758.cljs$lang$type = true;
cljs.core.async.t25758.cljs$lang$ctorStr = "cljs.core.async/t25758";
cljs.core.async.t25758.cljs$lang$ctorPrWriter = (function (this__20371__auto__,writer__20372__auto__,opt__20373__auto__){return cljs.core._write.call(null,writer__20372__auto__,"cljs.core.async/t25758");
});
cljs.core.async.t25758.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25758.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t25758.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t25758.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25760){var self__ = this;
var _25760__$1 = this;return self__.meta25759;
});
cljs.core.async.t25758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25760,meta25759__$1){var self__ = this;
var _25760__$1 = this;return (new cljs.core.async.t25758(self__.cb,self__.flag,self__.alt_handler,meta25759__$1));
});
cljs.core.async.__GT_t25758 = (function __GT_t25758(cb__$1,flag__$1,alt_handler__$1,meta25759){return (new cljs.core.async.t25758(cb__$1,flag__$1,alt_handler__$1,meta25759));
});
}
return (new cljs.core.async.t25758(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25761_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25761_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25762_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25762_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__19804__auto__ = wport;if(cljs.core.truth_(or__19804__auto__))
{return or__19804__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__28456 = (i + 1);
i = G__28456;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__19804__auto__ = ret;if(cljs.core.truth_(or__19804__auto__))
{return or__19804__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__19792__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__19792__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__19792__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__25763){var map__25765 = p__25763;var map__25765__$1 = ((cljs.core.seq_QMARK_.call(null,map__25765))?cljs.core.apply.call(null,cljs.core.hash_map,map__25765):map__25765);var opts = map__25765__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__25763 = null;if (arguments.length > 1) {
  p__25763 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__25763);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__28457){
var ports = cljs.core.first(arglist__28457);
var p__25763 = cljs.core.rest(arglist__28457);
return alts_BANG___delegate(ports,p__25763);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__22466__auto___28458 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22466__auto___28458){
return (function (){var f__22467__auto__ = (function (){var switch__22390__auto__ = ((function (c__22466__auto___28458){
return (function (state_25836){var state_val_25837 = (state_25836[1]);if((state_val_25837 === 1))
{var state_25836__$1 = state_25836;var statearr_25838_28459 = state_25836__$1;(statearr_25838_28459[2] = null);
(statearr_25838_28459[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25837 === 2))
{var state_25836__$1 = state_25836;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25836__$1,4,from);
} else
{if((state_val_25837 === 3))
{var inst_25834 = (state_25836[2]);var state_25836__$1 = state_25836;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25836__$1,inst_25834);
} else
{if((state_val_25837 === 4))
{var inst_25815 = (state_25836[7]);var inst_25815__$1 = (state_25836[2]);var inst_25816 = (inst_25815__$1 == null);var state_25836__$1 = (function (){var statearr_25839 = state_25836;(statearr_25839[7] = inst_25815__$1);
return statearr_25839;
})();if(cljs.core.truth_(inst_25816))
{var statearr_25840_28460 = state_25836__$1;(statearr_25840_28460[1] = 5);
} else
{var statearr_25841_28461 = state_25836__$1;(statearr_25841_28461[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25837 === 5))
{var state_25836__$1 = state_25836;if(cljs.core.truth_(close_QMARK_))
{var statearr_25842_28462 = state_25836__$1;(statearr_25842_28462[1] = 8);
} else
{var statearr_25843_28463 = state_25836__$1;(statearr_25843_28463[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25837 === 6))
{var inst_25815 = (state_25836[7]);var state_25836__$1 = state_25836;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25836__$1,11,to,inst_25815);
} else
{if((state_val_25837 === 7))
{var inst_25832 = (state_25836[2]);var state_25836__$1 = state_25836;var statearr_25844_28464 = state_25836__$1;(statearr_25844_28464[2] = inst_25832);
(statearr_25844_28464[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25837 === 8))
{var inst_25819 = cljs.core.async.close_BANG_.call(null,to);var state_25836__$1 = state_25836;var statearr_25845_28465 = state_25836__$1;(statearr_25845_28465[2] = inst_25819);
(statearr_25845_28465[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25837 === 9))
{var state_25836__$1 = state_25836;var statearr_25846_28466 = state_25836__$1;(statearr_25846_28466[2] = null);
(statearr_25846_28466[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25837 === 10))
{var inst_25822 = (state_25836[2]);var state_25836__$1 = state_25836;var statearr_25847_28467 = state_25836__$1;(statearr_25847_28467[2] = inst_25822);
(statearr_25847_28467[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25837 === 11))
{var inst_25825 = (state_25836[2]);var state_25836__$1 = state_25836;if(cljs.core.truth_(inst_25825))
{var statearr_25848_28468 = state_25836__$1;(statearr_25848_28468[1] = 12);
} else
{var statearr_25849_28469 = state_25836__$1;(statearr_25849_28469[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25837 === 12))
{var state_25836__$1 = state_25836;var statearr_25850_28470 = state_25836__$1;(statearr_25850_28470[2] = null);
(statearr_25850_28470[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25837 === 13))
{var state_25836__$1 = state_25836;var statearr_25851_28471 = state_25836__$1;(statearr_25851_28471[2] = null);
(statearr_25851_28471[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25837 === 14))
{var inst_25830 = (state_25836[2]);var state_25836__$1 = state_25836;var statearr_25852_28472 = state_25836__$1;(statearr_25852_28472[2] = inst_25830);
(statearr_25852_28472[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22466__auto___28458))
;return ((function (switch__22390__auto__,c__22466__auto___28458){
return (function() {
var state_machine__22391__auto__ = null;
var state_machine__22391__auto____0 = (function (){var statearr_25856 = [null,null,null,null,null,null,null,null];(statearr_25856[0] = state_machine__22391__auto__);
(statearr_25856[1] = 1);
return statearr_25856;
});
var state_machine__22391__auto____1 = (function (state_25836){while(true){
var ret_value__22392__auto__ = (function (){try{while(true){
var result__22393__auto__ = switch__22390__auto__.call(null,state_25836);if(cljs.core.keyword_identical_QMARK_.call(null,result__22393__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22393__auto__;
}
break;
}
}catch (e25857){if((e25857 instanceof Object))
{var ex__22394__auto__ = e25857;var statearr_25858_28473 = state_25836;(statearr_25858_28473[5] = ex__22394__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25836);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25857;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22392__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28474 = state_25836;
state_25836 = G__28474;
continue;
}
} else
{return ret_value__22392__auto__;
}
break;
}
});
state_machine__22391__auto__ = function(state_25836){
switch(arguments.length){
case 0:
return state_machine__22391__auto____0.call(this);
case 1:
return state_machine__22391__auto____1.call(this,state_25836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22391__auto____0;
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22391__auto____1;
return state_machine__22391__auto__;
})()
;})(switch__22390__auto__,c__22466__auto___28458))
})();var state__22468__auto__ = (function (){var statearr_25859 = f__22467__auto__.call(null);(statearr_25859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22466__auto___28458);
return statearr_25859;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22468__auto__);
});})(c__22466__auto___28458))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > 0))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-1637084636,null),new cljs.core.Symbol(null,"n","n",-1640531417,null))))].join('')));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__26042){var vec__26043 = p__26042;var v = cljs.core.nth.call(null,vec__26043,0,null);var p = cljs.core.nth.call(null,vec__26043,1,null);var job = vec__26043;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,1,xf,ex_handler);var c__22466__auto___28475 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22466__auto___28475,res,vec__26043,v,p,job,jobs,results){
return (function (){var f__22467__auto__ = (function (){var switch__22390__auto__ = ((function (c__22466__auto___28475,res,vec__26043,v,p,job,jobs,results){
return (function (state_26048){var state_val_26049 = (state_26048[1]);if((state_val_26049 === 2))
{var inst_26045 = (state_26048[2]);var inst_26046 = cljs.core.async.close_BANG_.call(null,res);var state_26048__$1 = (function (){var statearr_26050 = state_26048;(statearr_26050[7] = inst_26045);
return statearr_26050;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26048__$1,inst_26046);
} else
{if((state_val_26049 === 1))
{var state_26048__$1 = state_26048;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26048__$1,2,res,v);
} else
{return null;
}
}
});})(c__22466__auto___28475,res,vec__26043,v,p,job,jobs,results))
;return ((function (switch__22390__auto__,c__22466__auto___28475,res,vec__26043,v,p,job,jobs,results){
return (function() {
var state_machine__22391__auto__ = null;
var state_machine__22391__auto____0 = (function (){var statearr_26054 = [null,null,null,null,null,null,null,null];(statearr_26054[0] = state_machine__22391__auto__);
(statearr_26054[1] = 1);
return statearr_26054;
});
var state_machine__22391__auto____1 = (function (state_26048){while(true){
var ret_value__22392__auto__ = (function (){try{while(true){
var result__22393__auto__ = switch__22390__auto__.call(null,state_26048);if(cljs.core.keyword_identical_QMARK_.call(null,result__22393__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22393__auto__;
}
break;
}
}catch (e26055){if((e26055 instanceof Object))
{var ex__22394__auto__ = e26055;var statearr_26056_28476 = state_26048;(statearr_26056_28476[5] = ex__22394__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26048);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26055;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22392__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28477 = state_26048;
state_26048 = G__28477;
continue;
}
} else
{return ret_value__22392__auto__;
}
break;
}
});
state_machine__22391__auto__ = function(state_26048){
switch(arguments.length){
case 0:
return state_machine__22391__auto____0.call(this);
case 1:
return state_machine__22391__auto____1.call(this,state_26048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22391__auto____0;
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22391__auto____1;
return state_machine__22391__auto__;
})()
;})(switch__22390__auto__,c__22466__auto___28475,res,vec__26043,v,p,job,jobs,results))
})();var state__22468__auto__ = (function (){var statearr_26057 = f__22467__auto__.call(null);(statearr_26057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22466__auto___28475);
return statearr_26057;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22468__auto__);
});})(c__22466__auto___28475,res,vec__26043,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__26058){var vec__26059 = p__26058;var v = cljs.core.nth.call(null,vec__26059,0,null);var p = cljs.core.nth.call(null,vec__26059,1,null);var job = vec__26059;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,1);xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__20652__auto___28478 = n;var __28479 = 0;while(true){
if((__28479 < n__20652__auto___28478))
{var G__26060_28480 = type;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"async","async",1107031534),G__26060_28480))
{var c__22466__auto___28481 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (__28479,c__22466__auto___28481,G__26060_28480,n__20652__auto___28478,jobs,results,process,async){
return (function (){var f__22467__auto__ = (function (){var switch__22390__auto__ = ((function (__28479,c__22466__auto___28481,G__26060_28480,n__20652__auto___28478,jobs,results,process,async){
return (function (state_26073){var state_val_26074 = (state_26073[1]);if((state_val_26074 === 7))
{var inst_26069 = (state_26073[2]);var state_26073__$1 = state_26073;var statearr_26075_28482 = state_26073__$1;(statearr_26075_28482[2] = inst_26069);
(statearr_26075_28482[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26074 === 6))
{var state_26073__$1 = state_26073;var statearr_26076_28483 = state_26073__$1;(statearr_26076_28483[2] = null);
(statearr_26076_28483[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26074 === 5))
{var state_26073__$1 = state_26073;var statearr_26077_28484 = state_26073__$1;(statearr_26077_28484[2] = null);
(statearr_26077_28484[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26074 === 4))
{var inst_26063 = (state_26073[2]);var inst_26064 = async.call(null,inst_26063);var state_26073__$1 = state_26073;if(cljs.core.truth_(inst_26064))
{var statearr_26078_28485 = state_26073__$1;(statearr_26078_28485[1] = 5);
} else
{var statearr_26079_28486 = state_26073__$1;(statearr_26079_28486[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26074 === 3))
{var inst_26071 = (state_26073[2]);var state_26073__$1 = state_26073;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26073__$1,inst_26071);
} else
{if((state_val_26074 === 2))
{var state_26073__$1 = state_26073;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26073__$1,4,jobs);
} else
{if((state_val_26074 === 1))
{var state_26073__$1 = state_26073;var statearr_26080_28487 = state_26073__$1;(statearr_26080_28487[2] = null);
(statearr_26080_28487[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(__28479,c__22466__auto___28481,G__26060_28480,n__20652__auto___28478,jobs,results,process,async))
;return ((function (__28479,switch__22390__auto__,c__22466__auto___28481,G__26060_28480,n__20652__auto___28478,jobs,results,process,async){
return (function() {
var state_machine__22391__auto__ = null;
var state_machine__22391__auto____0 = (function (){var statearr_26084 = [null,null,null,null,null,null,null];(statearr_26084[0] = state_machine__22391__auto__);
(statearr_26084[1] = 1);
return statearr_26084;
});
var state_machine__22391__auto____1 = (function (state_26073){while(true){
var ret_value__22392__auto__ = (function (){try{while(true){
var result__22393__auto__ = switch__22390__auto__.call(null,state_26073);if(cljs.core.keyword_identical_QMARK_.call(null,result__22393__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22393__auto__;
}
break;
}
}catch (e26085){if((e26085 instanceof Object))
{var ex__22394__auto__ = e26085;var statearr_26086_28488 = state_26073;(statearr_26086_28488[5] = ex__22394__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26073);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26085;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22392__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28489 = state_26073;
state_26073 = G__28489;
continue;
}
} else
{return ret_value__22392__auto__;
}
break;
}
});
state_machine__22391__auto__ = function(state_26073){
switch(arguments.length){
case 0:
return state_machine__22391__auto____0.call(this);
case 1:
return state_machine__22391__auto____1.call(this,state_26073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22391__auto____0;
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22391__auto____1;
return state_machine__22391__auto__;
})()
;})(__28479,switch__22390__auto__,c__22466__auto___28481,G__26060_28480,n__20652__auto___28478,jobs,results,process,async))
})();var state__22468__auto__ = (function (){var statearr_26087 = f__22467__auto__.call(null);(statearr_26087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22466__auto___28481);
return statearr_26087;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22468__auto__);
});})(__28479,c__22466__auto___28481,G__26060_28480,n__20652__auto___28478,jobs,results,process,async))
);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compute","compute",1964407721),G__26060_28480))
{var c__22466__auto___28490 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (__28479,c__22466__auto___28490,G__26060_28480,n__20652__auto___28478,jobs,results,process,async){
return (function (){var f__22467__auto__ = (function (){var switch__22390__auto__ = ((function (__28479,c__22466__auto___28490,G__26060_28480,n__20652__auto___28478,jobs,results,process,async){
return (function (state_26100){var state_val_26101 = (state_26100[1]);if((state_val_26101 === 7))
{var inst_26096 = (state_26100[2]);var state_26100__$1 = state_26100;var statearr_26102_28491 = state_26100__$1;(statearr_26102_28491[2] = inst_26096);
(statearr_26102_28491[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26101 === 6))
{var state_26100__$1 = state_26100;var statearr_26103_28492 = state_26100__$1;(statearr_26103_28492[2] = null);
(statearr_26103_28492[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26101 === 5))
{var state_26100__$1 = state_26100;var statearr_26104_28493 = state_26100__$1;(statearr_26104_28493[2] = null);
(statearr_26104_28493[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26101 === 4))
{var inst_26090 = (state_26100[2]);var inst_26091 = process.call(null,inst_26090);var state_26100__$1 = state_26100;if(cljs.core.truth_(inst_26091))
{var statearr_26105_28494 = state_26100__$1;(statearr_26105_28494[1] = 5);
} else
{var statearr_26106_28495 = state_26100__$1;(statearr_26106_28495[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26101 === 3))
{var inst_26098 = (state_26100[2]);var state_26100__$1 = state_26100;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26100__$1,inst_26098);
} else
{if((state_val_26101 === 2))
{var state_26100__$1 = state_26100;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26100__$1,4,jobs);
} else
{if((state_val_26101 === 1))
{var state_26100__$1 = state_26100;var statearr_26107_28496 = state_26100__$1;(statearr_26107_28496[2] = null);
(statearr_26107_28496[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(__28479,c__22466__auto___28490,G__26060_28480,n__20652__auto___28478,jobs,results,process,async))
;return ((function (__28479,switch__22390__auto__,c__22466__auto___28490,G__26060_28480,n__20652__auto___28478,jobs,results,process,async){
return (function() {
var state_machine__22391__auto__ = null;
var state_machine__22391__auto____0 = (function (){var statearr_26111 = [null,null,null,null,null,null,null];(statearr_26111[0] = state_machine__22391__auto__);
(statearr_26111[1] = 1);
return statearr_26111;
});
var state_machine__22391__auto____1 = (function (state_26100){while(true){
var ret_value__22392__auto__ = (function (){try{while(true){
var result__22393__auto__ = switch__22390__auto__.call(null,state_26100);if(cljs.core.keyword_identical_QMARK_.call(null,result__22393__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22393__auto__;
}
break;
}
}catch (e26112){if((e26112 instanceof Object))
{var ex__22394__auto__ = e26112;var statearr_26113_28497 = state_26100;(statearr_26113_28497[5] = ex__22394__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26100);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26112;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22392__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28498 = state_26100;
state_26100 = G__28498;
continue;
}
} else
{return ret_value__22392__auto__;
}
break;
}
});
state_machine__22391__auto__ = function(state_26100){
switch(arguments.length){
case 0:
return state_machine__22391__auto____0.call(this);
case 1:
return state_machine__22391__auto____1.call(this,state_26100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22391__auto____0;
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22391__auto____1;
return state_machine__22391__auto__;
})()
;})(__28479,switch__22390__auto__,c__22466__auto___28490,G__26060_28480,n__20652__auto___28478,jobs,results,process,async))
})();var state__22468__auto__ = (function (){var statearr_26114 = f__22467__auto__.call(null);(statearr_26114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22466__auto___28490);
return statearr_26114;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22468__auto__);
});})(__28479,c__22466__auto___28490,G__26060_28480,n__20652__auto___28478,jobs,results,process,async))
);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));
} else
{}
}
}
{
var G__28499 = (__28479 + 1);
__28479 = G__28499;
continue;
}
} else
{}
break;
}
var c__22466__auto___28500 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22466__auto___28500,jobs,results,process,async){
return (function (){var f__22467__auto__ = (function (){var switch__22390__auto__ = ((function (c__22466__auto___28500,jobs,results,process,async){
return (function (state_26135){var state_val_26136 = (state_26135[1]);if((state_val_26136 === 9))
{var inst_26128 = (state_26135[2]);var state_26135__$1 = (function (){var statearr_26137 = state_26135;(statearr_26137[7] = inst_26128);
return statearr_26137;
})();var statearr_26138_28501 = state_26135__$1;(statearr_26138_28501[2] = null);
(statearr_26138_28501[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26136 === 8))
{var inst_26122 = (state_26135[8]);var inst_26126 = (state_26135[2]);var state_26135__$1 = (function (){var statearr_26139 = state_26135;(statearr_26139[9] = inst_26126);
return statearr_26139;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26135__$1,9,results,inst_26122);
} else
{if((state_val_26136 === 7))
{var inst_26131 = (state_26135[2]);var state_26135__$1 = state_26135;var statearr_26140_28502 = state_26135__$1;(statearr_26140_28502[2] = inst_26131);
(statearr_26140_28502[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26136 === 6))
{var inst_26117 = (state_26135[10]);var inst_26122 = (state_26135[8]);var inst_26122__$1 = cljs.core.async.chan.call(null,1);var inst_26123 = [inst_26117,inst_26122__$1];var inst_26124 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_26123,null));var state_26135__$1 = (function (){var statearr_26141 = state_26135;(statearr_26141[8] = inst_26122__$1);
return statearr_26141;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26135__$1,8,jobs,inst_26124);
} else
{if((state_val_26136 === 5))
{var inst_26120 = cljs.core.async.close_BANG_.call(null,jobs);var state_26135__$1 = state_26135;var statearr_26142_28503 = state_26135__$1;(statearr_26142_28503[2] = inst_26120);
(statearr_26142_28503[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26136 === 4))
{var inst_26117 = (state_26135[10]);var inst_26117__$1 = (state_26135[2]);var inst_26118 = (inst_26117__$1 == null);var state_26135__$1 = (function (){var statearr_26143 = state_26135;(statearr_26143[10] = inst_26117__$1);
return statearr_26143;
})();if(cljs.core.truth_(inst_26118))
{var statearr_26144_28504 = state_26135__$1;(statearr_26144_28504[1] = 5);
} else
{var statearr_26145_28505 = state_26135__$1;(statearr_26145_28505[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26136 === 3))
{var inst_26133 = (state_26135[2]);var state_26135__$1 = state_26135;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26135__$1,inst_26133);
} else
{if((state_val_26136 === 2))
{var state_26135__$1 = state_26135;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26135__$1,4,from);
} else
{if((state_val_26136 === 1))
{var state_26135__$1 = state_26135;var statearr_26146_28506 = state_26135__$1;(statearr_26146_28506[2] = null);
(statearr_26146_28506[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
});})(c__22466__auto___28500,jobs,results,process,async))
;return ((function (switch__22390__auto__,c__22466__auto___28500,jobs,results,process,async){
return (function() {
var state_machine__22391__auto__ = null;
var state_machine__22391__auto____0 = (function (){var statearr_26150 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26150[0] = state_machine__22391__auto__);
(statearr_26150[1] = 1);
return statearr_26150;
});
var state_machine__22391__auto____1 = (function (state_26135){while(true){
var ret_value__22392__auto__ = (function (){try{while(true){
var result__22393__auto__ = switch__22390__auto__.call(null,state_26135);if(cljs.core.keyword_identical_QMARK_.call(null,result__22393__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22393__auto__;
}
break;
}
}catch (e26151){if((e26151 instanceof Object))
{var ex__22394__auto__ = e26151;var statearr_26152_28507 = state_26135;(statearr_26152_28507[5] = ex__22394__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26135);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26151;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22392__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28508 = state_26135;
state_26135 = G__28508;
continue;
}
} else
{return ret_value__22392__auto__;
}
break;
}
});
state_machine__22391__auto__ = function(state_26135){
switch(arguments.length){
case 0:
return state_machine__22391__auto____0.call(this);
case 1:
return state_machine__22391__auto____1.call(this,state_26135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22391__auto____0;
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22391__auto____1;
return state_machine__22391__auto__;
})()
;})(switch__22390__auto__,c__22466__auto___28500,jobs,results,process,async))
})();var state__22468__auto__ = (function (){var statearr_26153 = f__22467__auto__.call(null);(statearr_26153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22466__auto___28500);
return statearr_26153;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22468__auto__);
});})(c__22466__auto___28500,jobs,results,process,async))
);
var c__22466__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22466__auto__,jobs,results,process,async){
return (function (){var f__22467__auto__ = (function (){var switch__22390__auto__ = ((function (c__22466__auto__,jobs,results,process,async){
return (function (state_26191){var state_val_26192 = (state_26191[1]);if((state_val_26192 === 1))
{var state_26191__$1 = state_26191;var statearr_26193_28509 = state_26191__$1;(statearr_26193_28509[2] = null);
(statearr_26193_28509[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26192 === 2))
{var state_26191__$1 = state_26191;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26191__$1,4,results);
} else
{if((state_val_26192 === 3))
{var inst_26189 = (state_26191[2]);var state_26191__$1 = state_26191;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26191__$1,inst_26189);
} else
{if((state_val_26192 === 4))
{var inst_26156 = (state_26191[7]);var inst_26156__$1 = (state_26191[2]);var inst_26157 = (inst_26156__$1 == null);var state_26191__$1 = (function (){var statearr_26194 = state_26191;(statearr_26194[7] = inst_26156__$1);
return statearr_26194;
})();if(cljs.core.truth_(inst_26157))
{var statearr_26195_28510 = state_26191__$1;(statearr_26195_28510[1] = 5);
} else
{var statearr_26196_28511 = state_26191__$1;(statearr_26196_28511[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26192 === 5))
{var state_26191__$1 = state_26191;if(cljs.core.truth_(close_QMARK_))
{var statearr_26197_28512 = state_26191__$1;(statearr_26197_28512[1] = 8);
} else
{var statearr_26198_28513 = state_26191__$1;(statearr_26198_28513[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26192 === 6))
{var inst_26156 = (state_26191[7]);var state_26191__$1 = state_26191;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26191__$1,11,inst_26156);
} else
{if((state_val_26192 === 7))
{var inst_26187 = (state_26191[2]);var state_26191__$1 = state_26191;var statearr_26199_28514 = state_26191__$1;(statearr_26199_28514[2] = inst_26187);
(statearr_26199_28514[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26192 === 8))
{var inst_26160 = cljs.core.async.close_BANG_.call(null,to);var state_26191__$1 = state_26191;var statearr_26200_28515 = state_26191__$1;(statearr_26200_28515[2] = inst_26160);
(statearr_26200_28515[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26192 === 9))
{var state_26191__$1 = state_26191;var statearr_26201_28516 = state_26191__$1;(statearr_26201_28516[2] = null);
(statearr_26201_28516[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26192 === 10))
{var inst_26163 = (state_26191[2]);var state_26191__$1 = state_26191;var statearr_26202_28517 = state_26191__$1;(statearr_26202_28517[2] = inst_26163);
(statearr_26202_28517[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26192 === 11))
{var inst_26166 = (state_26191[2]);var state_26191__$1 = (function (){var statearr_26203 = state_26191;(statearr_26203[8] = inst_26166);
return statearr_26203;
})();var statearr_26204_28518 = state_26191__$1;(statearr_26204_28518[2] = null);
(statearr_26204_28518[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26192 === 12))
{var inst_26166 = (state_26191[8]);var state_26191__$1 = state_26191;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26191__$1,14,inst_26166);
} else
{if((state_val_26192 === 13))
{var inst_26184 = (state_26191[2]);var state_26191__$1 = (function (){var statearr_26205 = state_26191;(statearr_26205[9] = inst_26184);
return statearr_26205;
})();var statearr_26206_28519 = state_26191__$1;(statearr_26206_28519[2] = null);
(statearr_26206_28519[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26192 === 14))
{var inst_26171 = (state_26191[10]);var inst_26169 = (state_26191[11]);var inst_26169__$1 = (state_26191[2]);var inst_26170 = (inst_26169__$1 == null);var inst_26171__$1 = cljs.core.not.call(null,inst_26170);var state_26191__$1 = (function (){var statearr_26207 = state_26191;(statearr_26207[10] = inst_26171__$1);
(statearr_26207[11] = inst_26169__$1);
return statearr_26207;
})();if(inst_26171__$1)
{var statearr_26208_28520 = state_26191__$1;(statearr_26208_28520[1] = 15);
} else
{var statearr_26209_28521 = state_26191__$1;(statearr_26209_28521[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26192 === 15))
{var inst_26169 = (state_26191[11]);var state_26191__$1 = state_26191;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26191__$1,18,to,inst_26169);
} else
{if((state_val_26192 === 16))
{var inst_26171 = (state_26191[10]);var state_26191__$1 = state_26191;var statearr_26210_28522 = state_26191__$1;(statearr_26210_28522[2] = inst_26171);
(statearr_26210_28522[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26192 === 17))
{var inst_26177 = (state_26191[2]);var state_26191__$1 = state_26191;if(cljs.core.truth_(inst_26177))
{var statearr_26211_28523 = state_26191__$1;(statearr_26211_28523[1] = 19);
} else
{var statearr_26212_28524 = state_26191__$1;(statearr_26212_28524[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26192 === 18))
{var inst_26174 = (state_26191[2]);var state_26191__$1 = state_26191;var statearr_26213_28525 = state_26191__$1;(statearr_26213_28525[2] = inst_26174);
(statearr_26213_28525[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26192 === 19))
{var state_26191__$1 = state_26191;var statearr_26214_28526 = state_26191__$1;(statearr_26214_28526[2] = null);
(statearr_26214_28526[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26192 === 20))
{var state_26191__$1 = state_26191;var statearr_26215_28527 = state_26191__$1;(statearr_26215_28527[2] = null);
(statearr_26215_28527[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26192 === 21))
{var inst_26182 = (state_26191[2]);var state_26191__$1 = state_26191;var statearr_26216_28528 = state_26191__$1;(statearr_26216_28528[2] = inst_26182);
(statearr_26216_28528[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22466__auto__,jobs,results,process,async))
;return ((function (switch__22390__auto__,c__22466__auto__,jobs,results,process,async){
return (function() {
var state_machine__22391__auto__ = null;
var state_machine__22391__auto____0 = (function (){var statearr_26220 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26220[0] = state_machine__22391__auto__);
(statearr_26220[1] = 1);
return statearr_26220;
});
var state_machine__22391__auto____1 = (function (state_26191){while(true){
var ret_value__22392__auto__ = (function (){try{while(true){
var result__22393__auto__ = switch__22390__auto__.call(null,state_26191);if(cljs.core.keyword_identical_QMARK_.call(null,result__22393__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22393__auto__;
}
break;
}
}catch (e26221){if((e26221 instanceof Object))
{var ex__22394__auto__ = e26221;var statearr_26222_28529 = state_26191;(statearr_26222_28529[5] = ex__22394__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26191);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26221;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22392__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28530 = state_26191;
state_26191 = G__28530;
continue;
}
} else
{return ret_value__22392__auto__;
}
break;
}
});
state_machine__22391__auto__ = function(state_26191){
switch(arguments.length){
case 0:
return state_machine__22391__auto____0.call(this);
case 1:
return state_machine__22391__auto____1.call(this,state_26191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22391__auto____0;
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22391__auto____1;
return state_machine__22391__auto__;
})()
;})(switch__22390__auto__,c__22466__auto__,jobs,results,process,async))
})();var state__22468__auto__ = (function (){var statearr_26223 = f__22467__auto__.call(null);(statearr_26223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22466__auto__);
return statearr_26223;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22468__auto__);
});})(c__22466__auto__,jobs,results,process,async))
);
return c__22466__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1107031534));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1964407721));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__22466__auto___28531 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22466__auto___28531,tc,fc){
return (function (){var f__22467__auto__ = (function (){var switch__22390__auto__ = ((function (c__22466__auto___28531,tc,fc){
return (function (state_26299){var state_val_26300 = (state_26299[1]);if((state_val_26300 === 1))
{var state_26299__$1 = state_26299;var statearr_26301_28532 = state_26299__$1;(statearr_26301_28532[2] = null);
(statearr_26301_28532[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26300 === 2))
{var state_26299__$1 = state_26299;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26299__$1,4,ch);
} else
{if((state_val_26300 === 3))
{var inst_26297 = (state_26299[2]);var state_26299__$1 = state_26299;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26299__$1,inst_26297);
} else
{if((state_val_26300 === 4))
{var inst_26276 = (state_26299[7]);var inst_26276__$1 = (state_26299[2]);var inst_26277 = (inst_26276__$1 == null);var state_26299__$1 = (function (){var statearr_26302 = state_26299;(statearr_26302[7] = inst_26276__$1);
return statearr_26302;
})();if(cljs.core.truth_(inst_26277))
{var statearr_26303_28533 = state_26299__$1;(statearr_26303_28533[1] = 5);
} else
{var statearr_26304_28534 = state_26299__$1;(statearr_26304_28534[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26300 === 5))
{var inst_26279 = cljs.core.async.close_BANG_.call(null,tc);var inst_26280 = cljs.core.async.close_BANG_.call(null,fc);var state_26299__$1 = (function (){var statearr_26305 = state_26299;(statearr_26305[8] = inst_26279);
return statearr_26305;
})();var statearr_26306_28535 = state_26299__$1;(statearr_26306_28535[2] = inst_26280);
(statearr_26306_28535[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26300 === 6))
{var inst_26276 = (state_26299[7]);var inst_26282 = p.call(null,inst_26276);var state_26299__$1 = state_26299;if(cljs.core.truth_(inst_26282))
{var statearr_26307_28536 = state_26299__$1;(statearr_26307_28536[1] = 9);
} else
{var statearr_26308_28537 = state_26299__$1;(statearr_26308_28537[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26300 === 7))
{var inst_26295 = (state_26299[2]);var state_26299__$1 = state_26299;var statearr_26309_28538 = state_26299__$1;(statearr_26309_28538[2] = inst_26295);
(statearr_26309_28538[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26300 === 8))
{var inst_26288 = (state_26299[2]);var state_26299__$1 = state_26299;if(cljs.core.truth_(inst_26288))
{var statearr_26310_28539 = state_26299__$1;(statearr_26310_28539[1] = 12);
} else
{var statearr_26311_28540 = state_26299__$1;(statearr_26311_28540[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26300 === 9))
{var state_26299__$1 = state_26299;var statearr_26312_28541 = state_26299__$1;(statearr_26312_28541[2] = tc);
(statearr_26312_28541[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26300 === 10))
{var state_26299__$1 = state_26299;var statearr_26313_28542 = state_26299__$1;(statearr_26313_28542[2] = fc);
(statearr_26313_28542[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26300 === 11))
{var inst_26276 = (state_26299[7]);var inst_26286 = (state_26299[2]);var state_26299__$1 = state_26299;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26299__$1,8,inst_26286,inst_26276);
} else
{if((state_val_26300 === 12))
{var state_26299__$1 = state_26299;var statearr_26314_28543 = state_26299__$1;(statearr_26314_28543[2] = null);
(statearr_26314_28543[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26300 === 13))
{var state_26299__$1 = state_26299;var statearr_26315_28544 = state_26299__$1;(statearr_26315_28544[2] = null);
(statearr_26315_28544[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26300 === 14))
{var inst_26293 = (state_26299[2]);var state_26299__$1 = state_26299;var statearr_26316_28545 = state_26299__$1;(statearr_26316_28545[2] = inst_26293);
(statearr_26316_28545[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22466__auto___28531,tc,fc))
;return ((function (switch__22390__auto__,c__22466__auto___28531,tc,fc){
return (function() {
var state_machine__22391__auto__ = null;
var state_machine__22391__auto____0 = (function (){var statearr_26320 = [null,null,null,null,null,null,null,null,null];(statearr_26320[0] = state_machine__22391__auto__);
(statearr_26320[1] = 1);
return statearr_26320;
});
var state_machine__22391__auto____1 = (function (state_26299){while(true){
var ret_value__22392__auto__ = (function (){try{while(true){
var result__22393__auto__ = switch__22390__auto__.call(null,state_26299);if(cljs.core.keyword_identical_QMARK_.call(null,result__22393__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22393__auto__;
}
break;
}
}catch (e26321){if((e26321 instanceof Object))
{var ex__22394__auto__ = e26321;var statearr_26322_28546 = state_26299;(statearr_26322_28546[5] = ex__22394__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26299);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26321;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22392__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28547 = state_26299;
state_26299 = G__28547;
continue;
}
} else
{return ret_value__22392__auto__;
}
break;
}
});
state_machine__22391__auto__ = function(state_26299){
switch(arguments.length){
case 0:
return state_machine__22391__auto____0.call(this);
case 1:
return state_machine__22391__auto____1.call(this,state_26299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22391__auto____0;
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22391__auto____1;
return state_machine__22391__auto__;
})()
;})(switch__22390__auto__,c__22466__auto___28531,tc,fc))
})();var state__22468__auto__ = (function (){var statearr_26323 = f__22467__auto__.call(null);(statearr_26323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22466__auto___28531);
return statearr_26323;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22468__auto__);
});})(c__22466__auto___28531,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__22466__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22466__auto__){
return (function (){var f__22467__auto__ = (function (){var switch__22390__auto__ = ((function (c__22466__auto__){
return (function (state_26370){var state_val_26371 = (state_26370[1]);if((state_val_26371 === 7))
{var inst_26366 = (state_26370[2]);var state_26370__$1 = state_26370;var statearr_26372_28548 = state_26370__$1;(statearr_26372_28548[2] = inst_26366);
(statearr_26372_28548[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26371 === 6))
{var inst_26359 = (state_26370[7]);var inst_26356 = (state_26370[8]);var inst_26363 = f.call(null,inst_26356,inst_26359);var inst_26356__$1 = inst_26363;var state_26370__$1 = (function (){var statearr_26373 = state_26370;(statearr_26373[8] = inst_26356__$1);
return statearr_26373;
})();var statearr_26374_28549 = state_26370__$1;(statearr_26374_28549[2] = null);
(statearr_26374_28549[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26371 === 5))
{var inst_26356 = (state_26370[8]);var state_26370__$1 = state_26370;var statearr_26375_28550 = state_26370__$1;(statearr_26375_28550[2] = inst_26356);
(statearr_26375_28550[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26371 === 4))
{var inst_26359 = (state_26370[7]);var inst_26359__$1 = (state_26370[2]);var inst_26360 = (inst_26359__$1 == null);var state_26370__$1 = (function (){var statearr_26376 = state_26370;(statearr_26376[7] = inst_26359__$1);
return statearr_26376;
})();if(cljs.core.truth_(inst_26360))
{var statearr_26377_28551 = state_26370__$1;(statearr_26377_28551[1] = 5);
} else
{var statearr_26378_28552 = state_26370__$1;(statearr_26378_28552[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26371 === 3))
{var inst_26368 = (state_26370[2]);var state_26370__$1 = state_26370;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26370__$1,inst_26368);
} else
{if((state_val_26371 === 2))
{var state_26370__$1 = state_26370;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26370__$1,4,ch);
} else
{if((state_val_26371 === 1))
{var inst_26356 = init;var state_26370__$1 = (function (){var statearr_26379 = state_26370;(statearr_26379[8] = inst_26356);
return statearr_26379;
})();var statearr_26380_28553 = state_26370__$1;(statearr_26380_28553[2] = null);
(statearr_26380_28553[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__22466__auto__))
;return ((function (switch__22390__auto__,c__22466__auto__){
return (function() {
var state_machine__22391__auto__ = null;
var state_machine__22391__auto____0 = (function (){var statearr_26384 = [null,null,null,null,null,null,null,null,null];(statearr_26384[0] = state_machine__22391__auto__);
(statearr_26384[1] = 1);
return statearr_26384;
});
var state_machine__22391__auto____1 = (function (state_26370){while(true){
var ret_value__22392__auto__ = (function (){try{while(true){
var result__22393__auto__ = switch__22390__auto__.call(null,state_26370);if(cljs.core.keyword_identical_QMARK_.call(null,result__22393__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22393__auto__;
}
break;
}
}catch (e26385){if((e26385 instanceof Object))
{var ex__22394__auto__ = e26385;var statearr_26386_28554 = state_26370;(statearr_26386_28554[5] = ex__22394__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26370);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26385;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22392__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28555 = state_26370;
state_26370 = G__28555;
continue;
}
} else
{return ret_value__22392__auto__;
}
break;
}
});
state_machine__22391__auto__ = function(state_26370){
switch(arguments.length){
case 0:
return state_machine__22391__auto____0.call(this);
case 1:
return state_machine__22391__auto____1.call(this,state_26370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22391__auto____0;
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22391__auto____1;
return state_machine__22391__auto__;
})()
;})(switch__22390__auto__,c__22466__auto__))
})();var state__22468__auto__ = (function (){var statearr_26387 = f__22467__auto__.call(null);(statearr_26387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22466__auto__);
return statearr_26387;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22468__auto__);
});})(c__22466__auto__))
);
return c__22466__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__22466__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22466__auto__){
return (function (){var f__22467__auto__ = (function (){var switch__22390__auto__ = ((function (c__22466__auto__){
return (function (state_26461){var state_val_26462 = (state_26461[1]);if((state_val_26462 === 1))
{var inst_26437 = cljs.core.seq.call(null,coll);var inst_26438 = inst_26437;var state_26461__$1 = (function (){var statearr_26463 = state_26461;(statearr_26463[7] = inst_26438);
return statearr_26463;
})();var statearr_26464_28556 = state_26461__$1;(statearr_26464_28556[2] = null);
(statearr_26464_28556[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26462 === 2))
{var inst_26438 = (state_26461[7]);var state_26461__$1 = state_26461;if(cljs.core.truth_(inst_26438))
{var statearr_26465_28557 = state_26461__$1;(statearr_26465_28557[1] = 4);
} else
{var statearr_26466_28558 = state_26461__$1;(statearr_26466_28558[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26462 === 3))
{var inst_26459 = (state_26461[2]);var state_26461__$1 = state_26461;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26461__$1,inst_26459);
} else
{if((state_val_26462 === 4))
{var inst_26438 = (state_26461[7]);var inst_26441 = cljs.core.first.call(null,inst_26438);var state_26461__$1 = state_26461;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26461__$1,7,ch,inst_26441);
} else
{if((state_val_26462 === 5))
{var inst_26438 = (state_26461[7]);var state_26461__$1 = state_26461;var statearr_26467_28559 = state_26461__$1;(statearr_26467_28559[2] = inst_26438);
(statearr_26467_28559[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26462 === 6))
{var inst_26446 = (state_26461[2]);var state_26461__$1 = state_26461;if(cljs.core.truth_(inst_26446))
{var statearr_26468_28560 = state_26461__$1;(statearr_26468_28560[1] = 8);
} else
{var statearr_26469_28561 = state_26461__$1;(statearr_26469_28561[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26462 === 7))
{var inst_26443 = (state_26461[2]);var state_26461__$1 = state_26461;var statearr_26470_28562 = state_26461__$1;(statearr_26470_28562[2] = inst_26443);
(statearr_26470_28562[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26462 === 8))
{var inst_26438 = (state_26461[7]);var inst_26448 = cljs.core.next.call(null,inst_26438);var inst_26438__$1 = inst_26448;var state_26461__$1 = (function (){var statearr_26471 = state_26461;(statearr_26471[7] = inst_26438__$1);
return statearr_26471;
})();var statearr_26472_28563 = state_26461__$1;(statearr_26472_28563[2] = null);
(statearr_26472_28563[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26462 === 9))
{var state_26461__$1 = state_26461;if(cljs.core.truth_(close_QMARK_))
{var statearr_26473_28564 = state_26461__$1;(statearr_26473_28564[1] = 11);
} else
{var statearr_26474_28565 = state_26461__$1;(statearr_26474_28565[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26462 === 10))
{var inst_26457 = (state_26461[2]);var state_26461__$1 = state_26461;var statearr_26475_28566 = state_26461__$1;(statearr_26475_28566[2] = inst_26457);
(statearr_26475_28566[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26462 === 11))
{var inst_26452 = cljs.core.async.close_BANG_.call(null,ch);var state_26461__$1 = state_26461;var statearr_26476_28567 = state_26461__$1;(statearr_26476_28567[2] = inst_26452);
(statearr_26476_28567[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26462 === 12))
{var state_26461__$1 = state_26461;var statearr_26477_28568 = state_26461__$1;(statearr_26477_28568[2] = null);
(statearr_26477_28568[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26462 === 13))
{var inst_26455 = (state_26461[2]);var state_26461__$1 = state_26461;var statearr_26478_28569 = state_26461__$1;(statearr_26478_28569[2] = inst_26455);
(statearr_26478_28569[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22466__auto__))
;return ((function (switch__22390__auto__,c__22466__auto__){
return (function() {
var state_machine__22391__auto__ = null;
var state_machine__22391__auto____0 = (function (){var statearr_26482 = [null,null,null,null,null,null,null,null];(statearr_26482[0] = state_machine__22391__auto__);
(statearr_26482[1] = 1);
return statearr_26482;
});
var state_machine__22391__auto____1 = (function (state_26461){while(true){
var ret_value__22392__auto__ = (function (){try{while(true){
var result__22393__auto__ = switch__22390__auto__.call(null,state_26461);if(cljs.core.keyword_identical_QMARK_.call(null,result__22393__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22393__auto__;
}
break;
}
}catch (e26483){if((e26483 instanceof Object))
{var ex__22394__auto__ = e26483;var statearr_26484_28570 = state_26461;(statearr_26484_28570[5] = ex__22394__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26461);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26483;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22392__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28571 = state_26461;
state_26461 = G__28571;
continue;
}
} else
{return ret_value__22392__auto__;
}
break;
}
});
state_machine__22391__auto__ = function(state_26461){
switch(arguments.length){
case 0:
return state_machine__22391__auto____0.call(this);
case 1:
return state_machine__22391__auto____1.call(this,state_26461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22391__auto____0;
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22391__auto____1;
return state_machine__22391__auto__;
})()
;})(switch__22390__auto__,c__22466__auto__))
})();var state__22468__auto__ = (function (){var statearr_26485 = f__22467__auto__.call(null);(statearr_26485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22466__auto__);
return statearr_26485;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22468__auto__);
});})(c__22466__auto__))
);
return c__22466__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj26487 = {};return obj26487;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__19792__auto__ = _;if(and__19792__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__19792__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__20431__auto__ = (((_ == null))?null:_);return (function (){var or__19804__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__20431__auto__)]);if(or__19804__auto__)
{return or__19804__auto__;
} else
{var or__19804__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__19804__auto____$1)
{return or__19804__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj26489 = {};return obj26489;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__19792__auto__ = m;if(and__19792__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__19792__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__20431__auto__ = (((m == null))?null:m);return (function (){var or__19804__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__20431__auto__)]);if(or__19804__auto__)
{return or__19804__auto__;
} else
{var or__19804__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__19804__auto____$1)
{return or__19804__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__19792__auto__ = m;if(and__19792__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__19792__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__20431__auto__ = (((m == null))?null:m);return (function (){var or__19804__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__20431__auto__)]);if(or__19804__auto__)
{return or__19804__auto__;
} else
{var or__19804__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__19804__auto____$1)
{return or__19804__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__19792__auto__ = m;if(and__19792__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__19792__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__20431__auto__ = (((m == null))?null:m);return (function (){var or__19804__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__20431__auto__)]);if(or__19804__auto__)
{return or__19804__auto__;
} else
{var or__19804__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__19804__auto____$1)
{return or__19804__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t26711 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26711 = (function (cs,ch,mult,meta26712){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta26712 = meta26712;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26711.cljs$lang$type = true;
cljs.core.async.t26711.cljs$lang$ctorStr = "cljs.core.async/t26711";
cljs.core.async.t26711.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20371__auto__,writer__20372__auto__,opt__20373__auto__){return cljs.core._write.call(null,writer__20372__auto__,"cljs.core.async/t26711");
});})(cs))
;
cljs.core.async.t26711.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t26711.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t26711.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t26711.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t26711.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26711.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t26711.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26713){var self__ = this;
var _26713__$1 = this;return self__.meta26712;
});})(cs))
;
cljs.core.async.t26711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26713,meta26712__$1){var self__ = this;
var _26713__$1 = this;return (new cljs.core.async.t26711(self__.cs,self__.ch,self__.mult,meta26712__$1));
});})(cs))
;
cljs.core.async.__GT_t26711 = ((function (cs){
return (function __GT_t26711(cs__$1,ch__$1,mult__$1,meta26712){return (new cljs.core.async.t26711(cs__$1,ch__$1,mult__$1,meta26712));
});})(cs))
;
}
return (new cljs.core.async.t26711(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__22466__auto___28572 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22466__auto___28572,cs,m,dchan,dctr,done){
return (function (){var f__22467__auto__ = (function (){var switch__22390__auto__ = ((function (c__22466__auto___28572,cs,m,dchan,dctr,done){
return (function (state_26844){var state_val_26845 = (state_26844[1]);if((state_val_26845 === 32))
{var inst_26784 = (state_26844[7]);var inst_26785 = (state_26844[8]);var inst_26787 = (state_26844[9]);var inst_26786 = (state_26844[10]);var inst_26799 = (state_26844[2]);var inst_26800 = (inst_26787 + 1);var tmp26846 = inst_26784;var tmp26847 = inst_26785;var tmp26848 = inst_26786;var inst_26784__$1 = tmp26846;var inst_26785__$1 = tmp26847;var inst_26786__$1 = tmp26848;var inst_26787__$1 = inst_26800;var state_26844__$1 = (function (){var statearr_26849 = state_26844;(statearr_26849[7] = inst_26784__$1);
(statearr_26849[8] = inst_26785__$1);
(statearr_26849[11] = inst_26799);
(statearr_26849[9] = inst_26787__$1);
(statearr_26849[10] = inst_26786__$1);
return statearr_26849;
})();var statearr_26850_28573 = state_26844__$1;(statearr_26850_28573[2] = null);
(statearr_26850_28573[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26845 === 1))
{var state_26844__$1 = state_26844;var statearr_26851_28574 = state_26844__$1;(statearr_26851_28574[2] = null);
(statearr_26851_28574[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26845 === 33))
{var inst_26803 = (state_26844[12]);var inst_26805 = cljs.core.chunked_seq_QMARK_.call(null,inst_26803);var state_26844__$1 = state_26844;if(inst_26805)
{var statearr_26852_28575 = state_26844__$1;(statearr_26852_28575[1] = 36);
} else
{var statearr_26853_28576 = state_26844__$1;(statearr_26853_28576[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26845 === 2))
{var state_26844__$1 = state_26844;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26844__$1,4,ch);
} else
{if((state_val_26845 === 34))
{var state_26844__$1 = state_26844;var statearr_26854_28577 = state_26844__$1;(statearr_26854_28577[2] = null);
(statearr_26854_28577[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26845 === 3))
{var inst_26842 = (state_26844[2]);var state_26844__$1 = state_26844;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26844__$1,inst_26842);
} else
{if((state_val_26845 === 35))
{var inst_26826 = (state_26844[2]);var state_26844__$1 = state_26844;var statearr_26855_28578 = state_26844__$1;(statearr_26855_28578[2] = inst_26826);
(statearr_26855_28578[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26845 === 4))
{var inst_26716 = (state_26844[13]);var inst_26716__$1 = (state_26844[2]);var inst_26717 = (inst_26716__$1 == null);var state_26844__$1 = (function (){var statearr_26856 = state_26844;(statearr_26856[13] = inst_26716__$1);
return statearr_26856;
})();if(cljs.core.truth_(inst_26717))
{var statearr_26857_28579 = state_26844__$1;(statearr_26857_28579[1] = 5);
} else
{var statearr_26858_28580 = state_26844__$1;(statearr_26858_28580[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26845 === 36))
{var inst_26803 = (state_26844[12]);var inst_26807 = cljs.core.chunk_first.call(null,inst_26803);var inst_26808 = cljs.core.chunk_rest.call(null,inst_26803);var inst_26809 = cljs.core.count.call(null,inst_26807);var inst_26784 = inst_26808;var inst_26785 = inst_26807;var inst_26786 = inst_26809;var inst_26787 = 0;var state_26844__$1 = (function (){var statearr_26859 = state_26844;(statearr_26859[7] = inst_26784);
(statearr_26859[8] = inst_26785);
(statearr_26859[9] = inst_26787);
(statearr_26859[10] = inst_26786);
return statearr_26859;
})();var statearr_26860_28581 = state_26844__$1;(statearr_26860_28581[2] = null);
(statearr_26860_28581[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26845 === 5))
{var inst_26723 = cljs.core.deref.call(null,cs);var inst_26724 = cljs.core.seq.call(null,inst_26723);var inst_26725 = inst_26724;var inst_26726 = null;var inst_26727 = 0;var inst_26728 = 0;var state_26844__$1 = (function (){var statearr_26861 = state_26844;(statearr_26861[14] = inst_26728);
(statearr_26861[15] = inst_26725);
(statearr_26861[16] = inst_26726);
(statearr_26861[17] = inst_26727);
return statearr_26861;
})();var statearr_26862_28582 = state_26844__$1;(statearr_26862_28582[2] = null);
(statearr_26862_28582[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26845 === 37))
{var inst_26812 = (state_26844[18]);var inst_26803 = (state_26844[12]);var inst_26716 = (state_26844[13]);var inst_26812__$1 = cljs.core.first.call(null,inst_26803);var inst_26813 = cljs.core.async.put_BANG_.call(null,inst_26812__$1,inst_26716,done);var state_26844__$1 = (function (){var statearr_26863 = state_26844;(statearr_26863[18] = inst_26812__$1);
return statearr_26863;
})();if(cljs.core.truth_(inst_26813))
{var statearr_26864_28583 = state_26844__$1;(statearr_26864_28583[1] = 39);
} else
{var statearr_26865_28584 = state_26844__$1;(statearr_26865_28584[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26845 === 6))
{var inst_26776 = (state_26844[19]);var inst_26775 = cljs.core.deref.call(null,cs);var inst_26776__$1 = cljs.core.keys.call(null,inst_26775);var inst_26777 = cljs.core.count.call(null,inst_26776__$1);var inst_26778 = cljs.core.reset_BANG_.call(null,dctr,inst_26777);var inst_26783 = cljs.core.seq.call(null,inst_26776__$1);var inst_26784 = inst_26783;var inst_26785 = null;var inst_26786 = 0;var inst_26787 = 0;var state_26844__$1 = (function (){var statearr_26866 = state_26844;(statearr_26866[7] = inst_26784);
(statearr_26866[8] = inst_26785);
(statearr_26866[9] = inst_26787);
(statearr_26866[10] = inst_26786);
(statearr_26866[20] = inst_26778);
(statearr_26866[19] = inst_26776__$1);
return statearr_26866;
})();var statearr_26867_28585 = state_26844__$1;(statearr_26867_28585[2] = null);
(statearr_26867_28585[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26845 === 38))
{var inst_26823 = (state_26844[2]);var state_26844__$1 = state_26844;var statearr_26868_28586 = state_26844__$1;(statearr_26868_28586[2] = inst_26823);
(statearr_26868_28586[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26845 === 7))
{var inst_26840 = (state_26844[2]);var state_26844__$1 = state_26844;var statearr_26869_28587 = state_26844__$1;(statearr_26869_28587[2] = inst_26840);
(statearr_26869_28587[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26845 === 39))
{var state_26844__$1 = state_26844;var statearr_26870_28588 = state_26844__$1;(statearr_26870_28588[2] = null);
(statearr_26870_28588[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26845 === 8))
{var inst_26728 = (state_26844[14]);var inst_26727 = (state_26844[17]);var inst_26730 = (inst_26728 < inst_26727);var inst_26731 = inst_26730;var state_26844__$1 = state_26844;if(cljs.core.truth_(inst_26731))
{var statearr_26871_28589 = state_26844__$1;(statearr_26871_28589[1] = 10);
} else
{var statearr_26872_28590 = state_26844__$1;(statearr_26872_28590[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26845 === 40))
{var inst_26812 = (state_26844[18]);var inst_26816 = done.call(null,null);var inst_26817 = cljs.core.async.untap_STAR_.call(null,m,inst_26812);var state_26844__$1 = (function (){var statearr_26873 = state_26844;(statearr_26873[21] = inst_26816);
return statearr_26873;
})();var statearr_26874_28591 = state_26844__$1;(statearr_26874_28591[2] = inst_26817);
(statearr_26874_28591[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26845 === 9))
{var inst_26773 = (state_26844[2]);var state_26844__$1 = state_26844;var statearr_26875_28592 = state_26844__$1;(statearr_26875_28592[2] = inst_26773);
(statearr_26875_28592[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26845 === 41))
{var inst_26803 = (state_26844[12]);var inst_26819 = (state_26844[2]);var inst_26820 = cljs.core.next.call(null,inst_26803);var inst_26784 = inst_26820;var inst_26785 = null;var inst_26786 = 0;var inst_26787 = 0;var state_26844__$1 = (function (){var statearr_26876 = state_26844;(statearr_26876[7] = inst_26784);
(statearr_26876[8] = inst_26785);
(statearr_26876[9] = inst_26787);
(statearr_26876[10] = inst_26786);
(statearr_26876[22] = inst_26819);
return statearr_26876;
})();var statearr_26877_28593 = state_26844__$1;(statearr_26877_28593[2] = null);
(statearr_26877_28593[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26845 === 10))
{var inst_26728 = (state_26844[14]);var inst_26726 = (state_26844[16]);var inst_26734 = cljs.core._nth.call(null,inst_26726,inst_26728);var inst_26735 = cljs.core.nth.call(null,inst_26734,0,null);var inst_26736 = cljs.core.nth.call(null,inst_26734,1,null);var state_26844__$1 = (function (){var statearr_26878 = state_26844;(statearr_26878[23] = inst_26735);
return statearr_26878;
})();if(cljs.core.truth_(inst_26736))
{var statearr_26879_28594 = state_26844__$1;(statearr_26879_28594[1] = 13);
} else
{var statearr_26880_28595 = state_26844__$1;(statearr_26880_28595[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26845 === 42))
{var state_26844__$1 = state_26844;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26844__$1,45,dchan);
} else
{if((state_val_26845 === 11))
{var inst_26745 = (state_26844[24]);var inst_26725 = (state_26844[15]);var inst_26745__$1 = cljs.core.seq.call(null,inst_26725);var state_26844__$1 = (function (){var statearr_26881 = state_26844;(statearr_26881[24] = inst_26745__$1);
return statearr_26881;
})();if(inst_26745__$1)
{var statearr_26882_28596 = state_26844__$1;(statearr_26882_28596[1] = 16);
} else
{var statearr_26883_28597 = state_26844__$1;(statearr_26883_28597[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26845 === 43))
{var state_26844__$1 = state_26844;var statearr_26884_28598 = state_26844__$1;(statearr_26884_28598[2] = null);
(statearr_26884_28598[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26845 === 12))
{var inst_26771 = (state_26844[2]);var state_26844__$1 = state_26844;var statearr_26885_28599 = state_26844__$1;(statearr_26885_28599[2] = inst_26771);
(statearr_26885_28599[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26845 === 44))
{var inst_26837 = (state_26844[2]);var state_26844__$1 = (function (){var statearr_26886 = state_26844;(statearr_26886[25] = inst_26837);
return statearr_26886;
})();var statearr_26887_28600 = state_26844__$1;(statearr_26887_28600[2] = null);
(statearr_26887_28600[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26845 === 13))
{var inst_26735 = (state_26844[23]);var inst_26738 = cljs.core.async.close_BANG_.call(null,inst_26735);var state_26844__$1 = state_26844;var statearr_26888_28601 = state_26844__$1;(statearr_26888_28601[2] = inst_26738);
(statearr_26888_28601[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26845 === 45))
{var inst_26834 = (state_26844[2]);var state_26844__$1 = state_26844;var statearr_26892_28602 = state_26844__$1;(statearr_26892_28602[2] = inst_26834);
(statearr_26892_28602[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26845 === 14))
{var state_26844__$1 = state_26844;var statearr_26893_28603 = state_26844__$1;(statearr_26893_28603[2] = null);
(statearr_26893_28603[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26845 === 15))
{var inst_26728 = (state_26844[14]);var inst_26725 = (state_26844[15]);var inst_26726 = (state_26844[16]);var inst_26727 = (state_26844[17]);var inst_26741 = (state_26844[2]);var inst_26742 = (inst_26728 + 1);var tmp26889 = inst_26725;var tmp26890 = inst_26726;var tmp26891 = inst_26727;var inst_26725__$1 = tmp26889;var inst_26726__$1 = tmp26890;var inst_26727__$1 = tmp26891;var inst_26728__$1 = inst_26742;var state_26844__$1 = (function (){var statearr_26894 = state_26844;(statearr_26894[26] = inst_26741);
(statearr_26894[14] = inst_26728__$1);
(statearr_26894[15] = inst_26725__$1);
(statearr_26894[16] = inst_26726__$1);
(statearr_26894[17] = inst_26727__$1);
return statearr_26894;
})();var statearr_26895_28604 = state_26844__$1;(statearr_26895_28604[2] = null);
(statearr_26895_28604[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26845 === 16))
{var inst_26745 = (state_26844[24]);var inst_26747 = cljs.core.chunked_seq_QMARK_.call(null,inst_26745);var state_26844__$1 = state_26844;if(inst_26747)
{var statearr_26896_28605 = state_26844__$1;(statearr_26896_28605[1] = 19);
} else
{var statearr_26897_28606 = state_26844__$1;(statearr_26897_28606[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26845 === 17))
{var state_26844__$1 = state_26844;var statearr_26898_28607 = state_26844__$1;(statearr_26898_28607[2] = null);
(statearr_26898_28607[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26845 === 18))
{var inst_26769 = (state_26844[2]);var state_26844__$1 = state_26844;var statearr_26899_28608 = state_26844__$1;(statearr_26899_28608[2] = inst_26769);
(statearr_26899_28608[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26845 === 19))
{var inst_26745 = (state_26844[24]);var inst_26749 = cljs.core.chunk_first.call(null,inst_26745);var inst_26750 = cljs.core.chunk_rest.call(null,inst_26745);var inst_26751 = cljs.core.count.call(null,inst_26749);var inst_26725 = inst_26750;var inst_26726 = inst_26749;var inst_26727 = inst_26751;var inst_26728 = 0;var state_26844__$1 = (function (){var statearr_26900 = state_26844;(statearr_26900[14] = inst_26728);
(statearr_26900[15] = inst_26725);
(statearr_26900[16] = inst_26726);
(statearr_26900[17] = inst_26727);
return statearr_26900;
})();var statearr_26901_28609 = state_26844__$1;(statearr_26901_28609[2] = null);
(statearr_26901_28609[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26845 === 20))
{var inst_26745 = (state_26844[24]);var inst_26755 = cljs.core.first.call(null,inst_26745);var inst_26756 = cljs.core.nth.call(null,inst_26755,0,null);var inst_26757 = cljs.core.nth.call(null,inst_26755,1,null);var state_26844__$1 = (function (){var statearr_26902 = state_26844;(statearr_26902[27] = inst_26756);
return statearr_26902;
})();if(cljs.core.truth_(inst_26757))
{var statearr_26903_28610 = state_26844__$1;(statearr_26903_28610[1] = 22);
} else
{var statearr_26904_28611 = state_26844__$1;(statearr_26904_28611[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26845 === 21))
{var inst_26766 = (state_26844[2]);var state_26844__$1 = state_26844;var statearr_26905_28612 = state_26844__$1;(statearr_26905_28612[2] = inst_26766);
(statearr_26905_28612[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26845 === 22))
{var inst_26756 = (state_26844[27]);var inst_26759 = cljs.core.async.close_BANG_.call(null,inst_26756);var state_26844__$1 = state_26844;var statearr_26906_28613 = state_26844__$1;(statearr_26906_28613[2] = inst_26759);
(statearr_26906_28613[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26845 === 23))
{var state_26844__$1 = state_26844;var statearr_26907_28614 = state_26844__$1;(statearr_26907_28614[2] = null);
(statearr_26907_28614[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26845 === 24))
{var inst_26745 = (state_26844[24]);var inst_26762 = (state_26844[2]);var inst_26763 = cljs.core.next.call(null,inst_26745);var inst_26725 = inst_26763;var inst_26726 = null;var inst_26727 = 0;var inst_26728 = 0;var state_26844__$1 = (function (){var statearr_26908 = state_26844;(statearr_26908[14] = inst_26728);
(statearr_26908[28] = inst_26762);
(statearr_26908[15] = inst_26725);
(statearr_26908[16] = inst_26726);
(statearr_26908[17] = inst_26727);
return statearr_26908;
})();var statearr_26909_28615 = state_26844__$1;(statearr_26909_28615[2] = null);
(statearr_26909_28615[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26845 === 25))
{var inst_26787 = (state_26844[9]);var inst_26786 = (state_26844[10]);var inst_26789 = (inst_26787 < inst_26786);var inst_26790 = inst_26789;var state_26844__$1 = state_26844;if(cljs.core.truth_(inst_26790))
{var statearr_26910_28616 = state_26844__$1;(statearr_26910_28616[1] = 27);
} else
{var statearr_26911_28617 = state_26844__$1;(statearr_26911_28617[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26845 === 26))
{var inst_26776 = (state_26844[19]);var inst_26830 = (state_26844[2]);var inst_26831 = cljs.core.seq.call(null,inst_26776);var state_26844__$1 = (function (){var statearr_26912 = state_26844;(statearr_26912[29] = inst_26830);
return statearr_26912;
})();if(inst_26831)
{var statearr_26913_28618 = state_26844__$1;(statearr_26913_28618[1] = 42);
} else
{var statearr_26914_28619 = state_26844__$1;(statearr_26914_28619[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26845 === 27))
{var inst_26785 = (state_26844[8]);var inst_26787 = (state_26844[9]);var inst_26792 = (state_26844[30]);var inst_26716 = (state_26844[13]);var inst_26792__$1 = cljs.core._nth.call(null,inst_26785,inst_26787);var inst_26793 = cljs.core.async.put_BANG_.call(null,inst_26792__$1,inst_26716,done);var state_26844__$1 = (function (){var statearr_26915 = state_26844;(statearr_26915[30] = inst_26792__$1);
return statearr_26915;
})();if(cljs.core.truth_(inst_26793))
{var statearr_26916_28620 = state_26844__$1;(statearr_26916_28620[1] = 30);
} else
{var statearr_26917_28621 = state_26844__$1;(statearr_26917_28621[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26845 === 28))
{var inst_26784 = (state_26844[7]);var inst_26803 = (state_26844[12]);var inst_26803__$1 = cljs.core.seq.call(null,inst_26784);var state_26844__$1 = (function (){var statearr_26918 = state_26844;(statearr_26918[12] = inst_26803__$1);
return statearr_26918;
})();if(inst_26803__$1)
{var statearr_26919_28622 = state_26844__$1;(statearr_26919_28622[1] = 33);
} else
{var statearr_26920_28623 = state_26844__$1;(statearr_26920_28623[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26845 === 29))
{var inst_26828 = (state_26844[2]);var state_26844__$1 = state_26844;var statearr_26921_28624 = state_26844__$1;(statearr_26921_28624[2] = inst_26828);
(statearr_26921_28624[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26845 === 30))
{var state_26844__$1 = state_26844;var statearr_26922_28625 = state_26844__$1;(statearr_26922_28625[2] = null);
(statearr_26922_28625[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26845 === 31))
{var inst_26792 = (state_26844[30]);var inst_26796 = done.call(null,null);var inst_26797 = cljs.core.async.untap_STAR_.call(null,m,inst_26792);var state_26844__$1 = (function (){var statearr_26923 = state_26844;(statearr_26923[31] = inst_26796);
return statearr_26923;
})();var statearr_26924_28626 = state_26844__$1;(statearr_26924_28626[2] = inst_26797);
(statearr_26924_28626[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22466__auto___28572,cs,m,dchan,dctr,done))
;return ((function (switch__22390__auto__,c__22466__auto___28572,cs,m,dchan,dctr,done){
return (function() {
var state_machine__22391__auto__ = null;
var state_machine__22391__auto____0 = (function (){var statearr_26928 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26928[0] = state_machine__22391__auto__);
(statearr_26928[1] = 1);
return statearr_26928;
});
var state_machine__22391__auto____1 = (function (state_26844){while(true){
var ret_value__22392__auto__ = (function (){try{while(true){
var result__22393__auto__ = switch__22390__auto__.call(null,state_26844);if(cljs.core.keyword_identical_QMARK_.call(null,result__22393__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22393__auto__;
}
break;
}
}catch (e26929){if((e26929 instanceof Object))
{var ex__22394__auto__ = e26929;var statearr_26930_28627 = state_26844;(statearr_26930_28627[5] = ex__22394__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26844);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26929;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22392__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28628 = state_26844;
state_26844 = G__28628;
continue;
}
} else
{return ret_value__22392__auto__;
}
break;
}
});
state_machine__22391__auto__ = function(state_26844){
switch(arguments.length){
case 0:
return state_machine__22391__auto____0.call(this);
case 1:
return state_machine__22391__auto____1.call(this,state_26844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22391__auto____0;
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22391__auto____1;
return state_machine__22391__auto__;
})()
;})(switch__22390__auto__,c__22466__auto___28572,cs,m,dchan,dctr,done))
})();var state__22468__auto__ = (function (){var statearr_26931 = f__22467__auto__.call(null);(statearr_26931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22466__auto___28572);
return statearr_26931;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22468__auto__);
});})(c__22466__auto___28572,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj26933 = {};return obj26933;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__19792__auto__ = m;if(and__19792__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__19792__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__20431__auto__ = (((m == null))?null:m);return (function (){var or__19804__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__20431__auto__)]);if(or__19804__auto__)
{return or__19804__auto__;
} else
{var or__19804__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__19804__auto____$1)
{return or__19804__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__19792__auto__ = m;if(and__19792__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__19792__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__20431__auto__ = (((m == null))?null:m);return (function (){var or__19804__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__20431__auto__)]);if(or__19804__auto__)
{return or__19804__auto__;
} else
{var or__19804__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__19804__auto____$1)
{return or__19804__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__19792__auto__ = m;if(and__19792__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__19792__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__20431__auto__ = (((m == null))?null:m);return (function (){var or__19804__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__20431__auto__)]);if(or__19804__auto__)
{return or__19804__auto__;
} else
{var or__19804__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__19804__auto____$1)
{return or__19804__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__19792__auto__ = m;if(and__19792__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__19792__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__20431__auto__ = (((m == null))?null:m);return (function (){var or__19804__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__20431__auto__)]);if(or__19804__auto__)
{return or__19804__auto__;
} else
{var or__19804__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__19804__auto____$1)
{return or__19804__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__19792__auto__ = m;if(and__19792__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__19792__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__20431__auto__ = (((m == null))?null:m);return (function (){var or__19804__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__20431__auto__)]);if(or__19804__auto__)
{return or__19804__auto__;
} else
{var or__19804__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__19804__auto____$1)
{return or__19804__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t27053 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27053 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta27054){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta27054 = meta27054;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27053.cljs$lang$type = true;
cljs.core.async.t27053.cljs$lang$ctorStr = "cljs.core.async/t27053";
cljs.core.async.t27053.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20371__auto__,writer__20372__auto__,opt__20373__auto__){return cljs.core._write.call(null,writer__20372__auto__,"cljs.core.async/t27053");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27053.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t27053.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27053.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27053.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27053.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27053.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27053.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27053.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27053.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27055){var self__ = this;
var _27055__$1 = this;return self__.meta27054;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27055,meta27054__$1){var self__ = this;
var _27055__$1 = this;return (new cljs.core.async.t27053(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta27054__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t27053 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t27053(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta27054){return (new cljs.core.async.t27053(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta27054));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t27053(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__22466__auto___28629 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22466__auto___28629,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__22467__auto__ = (function (){var switch__22390__auto__ = ((function (c__22466__auto___28629,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27125){var state_val_27126 = (state_27125[1]);if((state_val_27126 === 1))
{var inst_27059 = (state_27125[7]);var inst_27059__$1 = calc_state.call(null);var inst_27060 = cljs.core.seq_QMARK_.call(null,inst_27059__$1);var state_27125__$1 = (function (){var statearr_27127 = state_27125;(statearr_27127[7] = inst_27059__$1);
return statearr_27127;
})();if(inst_27060)
{var statearr_27128_28630 = state_27125__$1;(statearr_27128_28630[1] = 2);
} else
{var statearr_27129_28631 = state_27125__$1;(statearr_27129_28631[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27126 === 2))
{var inst_27059 = (state_27125[7]);var inst_27062 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27059);var state_27125__$1 = state_27125;var statearr_27130_28632 = state_27125__$1;(statearr_27130_28632[2] = inst_27062);
(statearr_27130_28632[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27126 === 3))
{var inst_27059 = (state_27125[7]);var state_27125__$1 = state_27125;var statearr_27131_28633 = state_27125__$1;(statearr_27131_28633[2] = inst_27059);
(statearr_27131_28633[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27126 === 4))
{var inst_27059 = (state_27125[7]);var inst_27065 = (state_27125[2]);var inst_27066 = cljs.core.get.call(null,inst_27065,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_27067 = cljs.core.get.call(null,inst_27065,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_27068 = cljs.core.get.call(null,inst_27065,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_27069 = inst_27059;var state_27125__$1 = (function (){var statearr_27132 = state_27125;(statearr_27132[8] = inst_27068);
(statearr_27132[9] = inst_27069);
(statearr_27132[10] = inst_27067);
(statearr_27132[11] = inst_27066);
return statearr_27132;
})();var statearr_27133_28634 = state_27125__$1;(statearr_27133_28634[2] = null);
(statearr_27133_28634[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27126 === 5))
{var inst_27069 = (state_27125[9]);var inst_27072 = cljs.core.seq_QMARK_.call(null,inst_27069);var state_27125__$1 = state_27125;if(inst_27072)
{var statearr_27134_28635 = state_27125__$1;(statearr_27134_28635[1] = 7);
} else
{var statearr_27135_28636 = state_27125__$1;(statearr_27135_28636[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27126 === 6))
{var inst_27123 = (state_27125[2]);var state_27125__$1 = state_27125;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27125__$1,inst_27123);
} else
{if((state_val_27126 === 7))
{var inst_27069 = (state_27125[9]);var inst_27074 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27069);var state_27125__$1 = state_27125;var statearr_27136_28637 = state_27125__$1;(statearr_27136_28637[2] = inst_27074);
(statearr_27136_28637[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27126 === 8))
{var inst_27069 = (state_27125[9]);var state_27125__$1 = state_27125;var statearr_27137_28638 = state_27125__$1;(statearr_27137_28638[2] = inst_27069);
(statearr_27137_28638[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27126 === 9))
{var inst_27077 = (state_27125[12]);var inst_27077__$1 = (state_27125[2]);var inst_27078 = cljs.core.get.call(null,inst_27077__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_27079 = cljs.core.get.call(null,inst_27077__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_27080 = cljs.core.get.call(null,inst_27077__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_27125__$1 = (function (){var statearr_27138 = state_27125;(statearr_27138[13] = inst_27079);
(statearr_27138[12] = inst_27077__$1);
(statearr_27138[14] = inst_27080);
return statearr_27138;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27125__$1,10,inst_27078);
} else
{if((state_val_27126 === 10))
{var inst_27084 = (state_27125[15]);var inst_27085 = (state_27125[16]);var inst_27083 = (state_27125[2]);var inst_27084__$1 = cljs.core.nth.call(null,inst_27083,0,null);var inst_27085__$1 = cljs.core.nth.call(null,inst_27083,1,null);var inst_27086 = (inst_27084__$1 == null);var inst_27087 = cljs.core._EQ_.call(null,inst_27085__$1,change);var inst_27088 = (inst_27086) || (inst_27087);var state_27125__$1 = (function (){var statearr_27139 = state_27125;(statearr_27139[15] = inst_27084__$1);
(statearr_27139[16] = inst_27085__$1);
return statearr_27139;
})();if(cljs.core.truth_(inst_27088))
{var statearr_27140_28639 = state_27125__$1;(statearr_27140_28639[1] = 11);
} else
{var statearr_27141_28640 = state_27125__$1;(statearr_27141_28640[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27126 === 11))
{var inst_27084 = (state_27125[15]);var inst_27090 = (inst_27084 == null);var state_27125__$1 = state_27125;if(cljs.core.truth_(inst_27090))
{var statearr_27142_28641 = state_27125__$1;(statearr_27142_28641[1] = 14);
} else
{var statearr_27143_28642 = state_27125__$1;(statearr_27143_28642[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27126 === 12))
{var inst_27080 = (state_27125[14]);var inst_27085 = (state_27125[16]);var inst_27099 = (state_27125[17]);var inst_27099__$1 = inst_27080.call(null,inst_27085);var state_27125__$1 = (function (){var statearr_27144 = state_27125;(statearr_27144[17] = inst_27099__$1);
return statearr_27144;
})();if(cljs.core.truth_(inst_27099__$1))
{var statearr_27145_28643 = state_27125__$1;(statearr_27145_28643[1] = 17);
} else
{var statearr_27146_28644 = state_27125__$1;(statearr_27146_28644[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27126 === 13))
{var inst_27121 = (state_27125[2]);var state_27125__$1 = state_27125;var statearr_27147_28645 = state_27125__$1;(statearr_27147_28645[2] = inst_27121);
(statearr_27147_28645[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27126 === 14))
{var inst_27085 = (state_27125[16]);var inst_27092 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27085);var state_27125__$1 = state_27125;var statearr_27148_28646 = state_27125__$1;(statearr_27148_28646[2] = inst_27092);
(statearr_27148_28646[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27126 === 15))
{var state_27125__$1 = state_27125;var statearr_27149_28647 = state_27125__$1;(statearr_27149_28647[2] = null);
(statearr_27149_28647[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27126 === 16))
{var inst_27095 = (state_27125[2]);var inst_27096 = calc_state.call(null);var inst_27069 = inst_27096;var state_27125__$1 = (function (){var statearr_27150 = state_27125;(statearr_27150[18] = inst_27095);
(statearr_27150[9] = inst_27069);
return statearr_27150;
})();var statearr_27151_28648 = state_27125__$1;(statearr_27151_28648[2] = null);
(statearr_27151_28648[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27126 === 17))
{var inst_27099 = (state_27125[17]);var state_27125__$1 = state_27125;var statearr_27152_28649 = state_27125__$1;(statearr_27152_28649[2] = inst_27099);
(statearr_27152_28649[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27126 === 18))
{var inst_27079 = (state_27125[13]);var inst_27080 = (state_27125[14]);var inst_27085 = (state_27125[16]);var inst_27102 = cljs.core.empty_QMARK_.call(null,inst_27080);var inst_27103 = inst_27079.call(null,inst_27085);var inst_27104 = cljs.core.not.call(null,inst_27103);var inst_27105 = (inst_27102) && (inst_27104);var state_27125__$1 = state_27125;var statearr_27153_28650 = state_27125__$1;(statearr_27153_28650[2] = inst_27105);
(statearr_27153_28650[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27126 === 19))
{var inst_27107 = (state_27125[2]);var state_27125__$1 = state_27125;if(cljs.core.truth_(inst_27107))
{var statearr_27154_28651 = state_27125__$1;(statearr_27154_28651[1] = 20);
} else
{var statearr_27155_28652 = state_27125__$1;(statearr_27155_28652[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27126 === 20))
{var inst_27084 = (state_27125[15]);var state_27125__$1 = state_27125;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27125__$1,23,out,inst_27084);
} else
{if((state_val_27126 === 21))
{var inst_27077 = (state_27125[12]);var inst_27069 = inst_27077;var state_27125__$1 = (function (){var statearr_27156 = state_27125;(statearr_27156[9] = inst_27069);
return statearr_27156;
})();var statearr_27157_28653 = state_27125__$1;(statearr_27157_28653[2] = null);
(statearr_27157_28653[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27126 === 22))
{var inst_27119 = (state_27125[2]);var state_27125__$1 = state_27125;var statearr_27158_28654 = state_27125__$1;(statearr_27158_28654[2] = inst_27119);
(statearr_27158_28654[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27126 === 23))
{var inst_27110 = (state_27125[2]);var state_27125__$1 = state_27125;if(cljs.core.truth_(inst_27110))
{var statearr_27159_28655 = state_27125__$1;(statearr_27159_28655[1] = 24);
} else
{var statearr_27160_28656 = state_27125__$1;(statearr_27160_28656[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27126 === 24))
{var inst_27077 = (state_27125[12]);var inst_27069 = inst_27077;var state_27125__$1 = (function (){var statearr_27161 = state_27125;(statearr_27161[9] = inst_27069);
return statearr_27161;
})();var statearr_27162_28657 = state_27125__$1;(statearr_27162_28657[2] = null);
(statearr_27162_28657[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27126 === 25))
{var state_27125__$1 = state_27125;var statearr_27163_28658 = state_27125__$1;(statearr_27163_28658[2] = null);
(statearr_27163_28658[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27126 === 26))
{var inst_27115 = (state_27125[2]);var state_27125__$1 = state_27125;var statearr_27164_28659 = state_27125__$1;(statearr_27164_28659[2] = inst_27115);
(statearr_27164_28659[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22466__auto___28629,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__22390__auto__,c__22466__auto___28629,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__22391__auto__ = null;
var state_machine__22391__auto____0 = (function (){var statearr_27168 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27168[0] = state_machine__22391__auto__);
(statearr_27168[1] = 1);
return statearr_27168;
});
var state_machine__22391__auto____1 = (function (state_27125){while(true){
var ret_value__22392__auto__ = (function (){try{while(true){
var result__22393__auto__ = switch__22390__auto__.call(null,state_27125);if(cljs.core.keyword_identical_QMARK_.call(null,result__22393__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22393__auto__;
}
break;
}
}catch (e27169){if((e27169 instanceof Object))
{var ex__22394__auto__ = e27169;var statearr_27170_28660 = state_27125;(statearr_27170_28660[5] = ex__22394__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27125);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27169;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22392__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28661 = state_27125;
state_27125 = G__28661;
continue;
}
} else
{return ret_value__22392__auto__;
}
break;
}
});
state_machine__22391__auto__ = function(state_27125){
switch(arguments.length){
case 0:
return state_machine__22391__auto____0.call(this);
case 1:
return state_machine__22391__auto____1.call(this,state_27125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22391__auto____0;
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22391__auto____1;
return state_machine__22391__auto__;
})()
;})(switch__22390__auto__,c__22466__auto___28629,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__22468__auto__ = (function (){var statearr_27171 = f__22467__auto__.call(null);(statearr_27171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22466__auto___28629);
return statearr_27171;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22468__auto__);
});})(c__22466__auto___28629,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj27173 = {};return obj27173;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__19792__auto__ = p;if(and__19792__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__19792__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__20431__auto__ = (((p == null))?null:p);return (function (){var or__19804__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__20431__auto__)]);if(or__19804__auto__)
{return or__19804__auto__;
} else
{var or__19804__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__19804__auto____$1)
{return or__19804__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__19792__auto__ = p;if(and__19792__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__19792__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__20431__auto__ = (((p == null))?null:p);return (function (){var or__19804__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__20431__auto__)]);if(or__19804__auto__)
{return or__19804__auto__;
} else
{var or__19804__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__19804__auto____$1)
{return or__19804__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__19792__auto__ = p;if(and__19792__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__19792__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__20431__auto__ = (((p == null))?null:p);return (function (){var or__19804__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20431__auto__)]);if(or__19804__auto__)
{return or__19804__auto__;
} else
{var or__19804__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__19804__auto____$1)
{return or__19804__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__19792__auto__ = p;if(and__19792__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__19792__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__20431__auto__ = (((p == null))?null:p);return (function (){var or__19804__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20431__auto__)]);if(or__19804__auto__)
{return or__19804__auto__;
} else
{var or__19804__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__19804__auto____$1)
{return or__19804__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__19804__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__19804__auto__))
{return or__19804__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__19804__auto__,mults){
return (function (p1__27174_SHARP_){if(cljs.core.truth_(p1__27174_SHARP_.call(null,topic)))
{return p1__27174_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__27174_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__19804__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t27297 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27297 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta27298){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta27298 = meta27298;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27297.cljs$lang$type = true;
cljs.core.async.t27297.cljs$lang$ctorStr = "cljs.core.async/t27297";
cljs.core.async.t27297.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20371__auto__,writer__20372__auto__,opt__20373__auto__){return cljs.core._write.call(null,writer__20372__auto__,"cljs.core.async/t27297");
});})(mults,ensure_mult))
;
cljs.core.async.t27297.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t27297.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t27297.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t27297.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t27297.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t27297.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27297.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t27297.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27299){var self__ = this;
var _27299__$1 = this;return self__.meta27298;
});})(mults,ensure_mult))
;
cljs.core.async.t27297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27299,meta27298__$1){var self__ = this;
var _27299__$1 = this;return (new cljs.core.async.t27297(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta27298__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t27297 = ((function (mults,ensure_mult){
return (function __GT_t27297(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27298){return (new cljs.core.async.t27297(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27298));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t27297(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__22466__auto___28662 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22466__auto___28662,mults,ensure_mult,p){
return (function (){var f__22467__auto__ = (function (){var switch__22390__auto__ = ((function (c__22466__auto___28662,mults,ensure_mult,p){
return (function (state_27371){var state_val_27372 = (state_27371[1]);if((state_val_27372 === 1))
{var state_27371__$1 = state_27371;var statearr_27373_28663 = state_27371__$1;(statearr_27373_28663[2] = null);
(statearr_27373_28663[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27372 === 2))
{var state_27371__$1 = state_27371;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27371__$1,4,ch);
} else
{if((state_val_27372 === 3))
{var inst_27369 = (state_27371[2]);var state_27371__$1 = state_27371;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27371__$1,inst_27369);
} else
{if((state_val_27372 === 4))
{var inst_27302 = (state_27371[7]);var inst_27302__$1 = (state_27371[2]);var inst_27303 = (inst_27302__$1 == null);var state_27371__$1 = (function (){var statearr_27374 = state_27371;(statearr_27374[7] = inst_27302__$1);
return statearr_27374;
})();if(cljs.core.truth_(inst_27303))
{var statearr_27375_28664 = state_27371__$1;(statearr_27375_28664[1] = 5);
} else
{var statearr_27376_28665 = state_27371__$1;(statearr_27376_28665[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27372 === 5))
{var inst_27309 = cljs.core.deref.call(null,mults);var inst_27310 = cljs.core.vals.call(null,inst_27309);var inst_27311 = cljs.core.seq.call(null,inst_27310);var inst_27312 = inst_27311;var inst_27313 = null;var inst_27314 = 0;var inst_27315 = 0;var state_27371__$1 = (function (){var statearr_27377 = state_27371;(statearr_27377[8] = inst_27312);
(statearr_27377[9] = inst_27313);
(statearr_27377[10] = inst_27315);
(statearr_27377[11] = inst_27314);
return statearr_27377;
})();var statearr_27378_28666 = state_27371__$1;(statearr_27378_28666[2] = null);
(statearr_27378_28666[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27372 === 6))
{var inst_27350 = (state_27371[12]);var inst_27352 = (state_27371[13]);var inst_27302 = (state_27371[7]);var inst_27350__$1 = topic_fn.call(null,inst_27302);var inst_27351 = cljs.core.deref.call(null,mults);var inst_27352__$1 = cljs.core.get.call(null,inst_27351,inst_27350__$1);var state_27371__$1 = (function (){var statearr_27379 = state_27371;(statearr_27379[12] = inst_27350__$1);
(statearr_27379[13] = inst_27352__$1);
return statearr_27379;
})();if(cljs.core.truth_(inst_27352__$1))
{var statearr_27380_28667 = state_27371__$1;(statearr_27380_28667[1] = 19);
} else
{var statearr_27381_28668 = state_27371__$1;(statearr_27381_28668[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27372 === 7))
{var inst_27367 = (state_27371[2]);var state_27371__$1 = state_27371;var statearr_27382_28669 = state_27371__$1;(statearr_27382_28669[2] = inst_27367);
(statearr_27382_28669[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27372 === 8))
{var inst_27315 = (state_27371[10]);var inst_27314 = (state_27371[11]);var inst_27317 = (inst_27315 < inst_27314);var inst_27318 = inst_27317;var state_27371__$1 = state_27371;if(cljs.core.truth_(inst_27318))
{var statearr_27386_28670 = state_27371__$1;(statearr_27386_28670[1] = 10);
} else
{var statearr_27387_28671 = state_27371__$1;(statearr_27387_28671[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27372 === 9))
{var inst_27348 = (state_27371[2]);var state_27371__$1 = state_27371;var statearr_27388_28672 = state_27371__$1;(statearr_27388_28672[2] = inst_27348);
(statearr_27388_28672[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27372 === 10))
{var inst_27312 = (state_27371[8]);var inst_27313 = (state_27371[9]);var inst_27315 = (state_27371[10]);var inst_27314 = (state_27371[11]);var inst_27320 = cljs.core._nth.call(null,inst_27313,inst_27315);var inst_27321 = cljs.core.async.muxch_STAR_.call(null,inst_27320);var inst_27322 = cljs.core.async.close_BANG_.call(null,inst_27321);var inst_27323 = (inst_27315 + 1);var tmp27383 = inst_27312;var tmp27384 = inst_27313;var tmp27385 = inst_27314;var inst_27312__$1 = tmp27383;var inst_27313__$1 = tmp27384;var inst_27314__$1 = tmp27385;var inst_27315__$1 = inst_27323;var state_27371__$1 = (function (){var statearr_27389 = state_27371;(statearr_27389[8] = inst_27312__$1);
(statearr_27389[9] = inst_27313__$1);
(statearr_27389[14] = inst_27322);
(statearr_27389[10] = inst_27315__$1);
(statearr_27389[11] = inst_27314__$1);
return statearr_27389;
})();var statearr_27390_28673 = state_27371__$1;(statearr_27390_28673[2] = null);
(statearr_27390_28673[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27372 === 11))
{var inst_27312 = (state_27371[8]);var inst_27326 = (state_27371[15]);var inst_27326__$1 = cljs.core.seq.call(null,inst_27312);var state_27371__$1 = (function (){var statearr_27391 = state_27371;(statearr_27391[15] = inst_27326__$1);
return statearr_27391;
})();if(inst_27326__$1)
{var statearr_27392_28674 = state_27371__$1;(statearr_27392_28674[1] = 13);
} else
{var statearr_27393_28675 = state_27371__$1;(statearr_27393_28675[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27372 === 12))
{var inst_27346 = (state_27371[2]);var state_27371__$1 = state_27371;var statearr_27394_28676 = state_27371__$1;(statearr_27394_28676[2] = inst_27346);
(statearr_27394_28676[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27372 === 13))
{var inst_27326 = (state_27371[15]);var inst_27328 = cljs.core.chunked_seq_QMARK_.call(null,inst_27326);var state_27371__$1 = state_27371;if(inst_27328)
{var statearr_27395_28677 = state_27371__$1;(statearr_27395_28677[1] = 16);
} else
{var statearr_27396_28678 = state_27371__$1;(statearr_27396_28678[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27372 === 14))
{var state_27371__$1 = state_27371;var statearr_27397_28679 = state_27371__$1;(statearr_27397_28679[2] = null);
(statearr_27397_28679[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27372 === 15))
{var inst_27344 = (state_27371[2]);var state_27371__$1 = state_27371;var statearr_27398_28680 = state_27371__$1;(statearr_27398_28680[2] = inst_27344);
(statearr_27398_28680[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27372 === 16))
{var inst_27326 = (state_27371[15]);var inst_27330 = cljs.core.chunk_first.call(null,inst_27326);var inst_27331 = cljs.core.chunk_rest.call(null,inst_27326);var inst_27332 = cljs.core.count.call(null,inst_27330);var inst_27312 = inst_27331;var inst_27313 = inst_27330;var inst_27314 = inst_27332;var inst_27315 = 0;var state_27371__$1 = (function (){var statearr_27399 = state_27371;(statearr_27399[8] = inst_27312);
(statearr_27399[9] = inst_27313);
(statearr_27399[10] = inst_27315);
(statearr_27399[11] = inst_27314);
return statearr_27399;
})();var statearr_27400_28681 = state_27371__$1;(statearr_27400_28681[2] = null);
(statearr_27400_28681[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27372 === 17))
{var inst_27326 = (state_27371[15]);var inst_27335 = cljs.core.first.call(null,inst_27326);var inst_27336 = cljs.core.async.muxch_STAR_.call(null,inst_27335);var inst_27337 = cljs.core.async.close_BANG_.call(null,inst_27336);var inst_27338 = cljs.core.next.call(null,inst_27326);var inst_27312 = inst_27338;var inst_27313 = null;var inst_27314 = 0;var inst_27315 = 0;var state_27371__$1 = (function (){var statearr_27401 = state_27371;(statearr_27401[8] = inst_27312);
(statearr_27401[9] = inst_27313);
(statearr_27401[10] = inst_27315);
(statearr_27401[11] = inst_27314);
(statearr_27401[16] = inst_27337);
return statearr_27401;
})();var statearr_27402_28682 = state_27371__$1;(statearr_27402_28682[2] = null);
(statearr_27402_28682[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27372 === 18))
{var inst_27341 = (state_27371[2]);var state_27371__$1 = state_27371;var statearr_27403_28683 = state_27371__$1;(statearr_27403_28683[2] = inst_27341);
(statearr_27403_28683[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27372 === 19))
{var inst_27352 = (state_27371[13]);var inst_27302 = (state_27371[7]);var inst_27354 = cljs.core.async.muxch_STAR_.call(null,inst_27352);var state_27371__$1 = state_27371;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27371__$1,22,inst_27354,inst_27302);
} else
{if((state_val_27372 === 20))
{var state_27371__$1 = state_27371;var statearr_27404_28684 = state_27371__$1;(statearr_27404_28684[2] = null);
(statearr_27404_28684[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27372 === 21))
{var inst_27364 = (state_27371[2]);var state_27371__$1 = (function (){var statearr_27405 = state_27371;(statearr_27405[17] = inst_27364);
return statearr_27405;
})();var statearr_27406_28685 = state_27371__$1;(statearr_27406_28685[2] = null);
(statearr_27406_28685[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27372 === 22))
{var inst_27356 = (state_27371[2]);var state_27371__$1 = state_27371;if(cljs.core.truth_(inst_27356))
{var statearr_27407_28686 = state_27371__$1;(statearr_27407_28686[1] = 23);
} else
{var statearr_27408_28687 = state_27371__$1;(statearr_27408_28687[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27372 === 23))
{var state_27371__$1 = state_27371;var statearr_27409_28688 = state_27371__$1;(statearr_27409_28688[2] = null);
(statearr_27409_28688[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27372 === 24))
{var inst_27350 = (state_27371[12]);var inst_27359 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27350);var state_27371__$1 = state_27371;var statearr_27410_28689 = state_27371__$1;(statearr_27410_28689[2] = inst_27359);
(statearr_27410_28689[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27372 === 25))
{var inst_27361 = (state_27371[2]);var state_27371__$1 = state_27371;var statearr_27411_28690 = state_27371__$1;(statearr_27411_28690[2] = inst_27361);
(statearr_27411_28690[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22466__auto___28662,mults,ensure_mult,p))
;return ((function (switch__22390__auto__,c__22466__auto___28662,mults,ensure_mult,p){
return (function() {
var state_machine__22391__auto__ = null;
var state_machine__22391__auto____0 = (function (){var statearr_27415 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27415[0] = state_machine__22391__auto__);
(statearr_27415[1] = 1);
return statearr_27415;
});
var state_machine__22391__auto____1 = (function (state_27371){while(true){
var ret_value__22392__auto__ = (function (){try{while(true){
var result__22393__auto__ = switch__22390__auto__.call(null,state_27371);if(cljs.core.keyword_identical_QMARK_.call(null,result__22393__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22393__auto__;
}
break;
}
}catch (e27416){if((e27416 instanceof Object))
{var ex__22394__auto__ = e27416;var statearr_27417_28691 = state_27371;(statearr_27417_28691[5] = ex__22394__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27371);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27416;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22392__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28692 = state_27371;
state_27371 = G__28692;
continue;
}
} else
{return ret_value__22392__auto__;
}
break;
}
});
state_machine__22391__auto__ = function(state_27371){
switch(arguments.length){
case 0:
return state_machine__22391__auto____0.call(this);
case 1:
return state_machine__22391__auto____1.call(this,state_27371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22391__auto____0;
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22391__auto____1;
return state_machine__22391__auto__;
})()
;})(switch__22390__auto__,c__22466__auto___28662,mults,ensure_mult,p))
})();var state__22468__auto__ = (function (){var statearr_27418 = f__22467__auto__.call(null);(statearr_27418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22466__auto___28662);
return statearr_27418;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22468__auto__);
});})(c__22466__auto___28662,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__22466__auto___28693 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22466__auto___28693,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__22467__auto__ = (function (){var switch__22390__auto__ = ((function (c__22466__auto___28693,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27525){var state_val_27526 = (state_27525[1]);if((state_val_27526 === 1))
{var state_27525__$1 = state_27525;var statearr_27527_28694 = state_27525__$1;(statearr_27527_28694[2] = null);
(statearr_27527_28694[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27526 === 2))
{var inst_27488 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_27489 = 0;var state_27525__$1 = (function (){var statearr_27528 = state_27525;(statearr_27528[7] = inst_27488);
(statearr_27528[8] = inst_27489);
return statearr_27528;
})();var statearr_27529_28695 = state_27525__$1;(statearr_27529_28695[2] = null);
(statearr_27529_28695[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27526 === 3))
{var inst_27523 = (state_27525[2]);var state_27525__$1 = state_27525;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27525__$1,inst_27523);
} else
{if((state_val_27526 === 4))
{var inst_27489 = (state_27525[8]);var inst_27491 = (inst_27489 < cnt);var state_27525__$1 = state_27525;if(cljs.core.truth_(inst_27491))
{var statearr_27530_28696 = state_27525__$1;(statearr_27530_28696[1] = 6);
} else
{var statearr_27531_28697 = state_27525__$1;(statearr_27531_28697[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27526 === 5))
{var inst_27509 = (state_27525[2]);var state_27525__$1 = (function (){var statearr_27532 = state_27525;(statearr_27532[9] = inst_27509);
return statearr_27532;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27525__$1,12,dchan);
} else
{if((state_val_27526 === 6))
{var state_27525__$1 = state_27525;var statearr_27533_28698 = state_27525__$1;(statearr_27533_28698[2] = null);
(statearr_27533_28698[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27526 === 7))
{var state_27525__$1 = state_27525;var statearr_27534_28699 = state_27525__$1;(statearr_27534_28699[2] = null);
(statearr_27534_28699[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27526 === 8))
{var inst_27507 = (state_27525[2]);var state_27525__$1 = state_27525;var statearr_27535_28700 = state_27525__$1;(statearr_27535_28700[2] = inst_27507);
(statearr_27535_28700[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27526 === 9))
{var inst_27489 = (state_27525[8]);var inst_27502 = (state_27525[2]);var inst_27503 = (inst_27489 + 1);var inst_27489__$1 = inst_27503;var state_27525__$1 = (function (){var statearr_27536 = state_27525;(statearr_27536[8] = inst_27489__$1);
(statearr_27536[10] = inst_27502);
return statearr_27536;
})();var statearr_27537_28701 = state_27525__$1;(statearr_27537_28701[2] = null);
(statearr_27537_28701[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27526 === 10))
{var inst_27493 = (state_27525[2]);var inst_27494 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_27525__$1 = (function (){var statearr_27538 = state_27525;(statearr_27538[11] = inst_27493);
return statearr_27538;
})();var statearr_27539_28702 = state_27525__$1;(statearr_27539_28702[2] = inst_27494);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27525__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27526 === 11))
{var inst_27489 = (state_27525[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27525,10,Object,null,9);var inst_27498 = chs__$1.call(null,inst_27489);var inst_27499 = done.call(null,inst_27489);var inst_27500 = cljs.core.async.take_BANG_.call(null,inst_27498,inst_27499);var state_27525__$1 = state_27525;var statearr_27540_28703 = state_27525__$1;(statearr_27540_28703[2] = inst_27500);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27525__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27526 === 12))
{var inst_27511 = (state_27525[12]);var inst_27511__$1 = (state_27525[2]);var inst_27512 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27511__$1);var state_27525__$1 = (function (){var statearr_27541 = state_27525;(statearr_27541[12] = inst_27511__$1);
return statearr_27541;
})();if(cljs.core.truth_(inst_27512))
{var statearr_27542_28704 = state_27525__$1;(statearr_27542_28704[1] = 13);
} else
{var statearr_27543_28705 = state_27525__$1;(statearr_27543_28705[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27526 === 13))
{var inst_27514 = cljs.core.async.close_BANG_.call(null,out);var state_27525__$1 = state_27525;var statearr_27544_28706 = state_27525__$1;(statearr_27544_28706[2] = inst_27514);
(statearr_27544_28706[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27526 === 14))
{var inst_27511 = (state_27525[12]);var inst_27516 = cljs.core.apply.call(null,f,inst_27511);var state_27525__$1 = state_27525;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27525__$1,16,out,inst_27516);
} else
{if((state_val_27526 === 15))
{var inst_27521 = (state_27525[2]);var state_27525__$1 = state_27525;var statearr_27545_28707 = state_27525__$1;(statearr_27545_28707[2] = inst_27521);
(statearr_27545_28707[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27526 === 16))
{var inst_27518 = (state_27525[2]);var state_27525__$1 = (function (){var statearr_27546 = state_27525;(statearr_27546[13] = inst_27518);
return statearr_27546;
})();var statearr_27547_28708 = state_27525__$1;(statearr_27547_28708[2] = null);
(statearr_27547_28708[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22466__auto___28693,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__22390__auto__,c__22466__auto___28693,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__22391__auto__ = null;
var state_machine__22391__auto____0 = (function (){var statearr_27551 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27551[0] = state_machine__22391__auto__);
(statearr_27551[1] = 1);
return statearr_27551;
});
var state_machine__22391__auto____1 = (function (state_27525){while(true){
var ret_value__22392__auto__ = (function (){try{while(true){
var result__22393__auto__ = switch__22390__auto__.call(null,state_27525);if(cljs.core.keyword_identical_QMARK_.call(null,result__22393__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22393__auto__;
}
break;
}
}catch (e27552){if((e27552 instanceof Object))
{var ex__22394__auto__ = e27552;var statearr_27553_28709 = state_27525;(statearr_27553_28709[5] = ex__22394__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27525);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27552;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22392__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28710 = state_27525;
state_27525 = G__28710;
continue;
}
} else
{return ret_value__22392__auto__;
}
break;
}
});
state_machine__22391__auto__ = function(state_27525){
switch(arguments.length){
case 0:
return state_machine__22391__auto____0.call(this);
case 1:
return state_machine__22391__auto____1.call(this,state_27525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22391__auto____0;
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22391__auto____1;
return state_machine__22391__auto__;
})()
;})(switch__22390__auto__,c__22466__auto___28693,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__22468__auto__ = (function (){var statearr_27554 = f__22467__auto__.call(null);(statearr_27554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22466__auto___28693);
return statearr_27554;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22468__auto__);
});})(c__22466__auto___28693,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22466__auto___28711 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22466__auto___28711,out){
return (function (){var f__22467__auto__ = (function (){var switch__22390__auto__ = ((function (c__22466__auto___28711,out){
return (function (state_27638){var state_val_27639 = (state_27638[1]);if((state_val_27639 === 1))
{var inst_27609 = cljs.core.vec.call(null,chs);var inst_27610 = inst_27609;var state_27638__$1 = (function (){var statearr_27640 = state_27638;(statearr_27640[7] = inst_27610);
return statearr_27640;
})();var statearr_27641_28712 = state_27638__$1;(statearr_27641_28712[2] = null);
(statearr_27641_28712[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27639 === 2))
{var inst_27610 = (state_27638[7]);var inst_27612 = cljs.core.count.call(null,inst_27610);var inst_27613 = (inst_27612 > 0);var state_27638__$1 = state_27638;if(cljs.core.truth_(inst_27613))
{var statearr_27642_28713 = state_27638__$1;(statearr_27642_28713[1] = 4);
} else
{var statearr_27643_28714 = state_27638__$1;(statearr_27643_28714[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27639 === 3))
{var inst_27636 = (state_27638[2]);var state_27638__$1 = state_27638;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27638__$1,inst_27636);
} else
{if((state_val_27639 === 4))
{var inst_27610 = (state_27638[7]);var state_27638__$1 = state_27638;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27638__$1,7,inst_27610);
} else
{if((state_val_27639 === 5))
{var inst_27632 = cljs.core.async.close_BANG_.call(null,out);var state_27638__$1 = state_27638;var statearr_27644_28715 = state_27638__$1;(statearr_27644_28715[2] = inst_27632);
(statearr_27644_28715[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27639 === 6))
{var inst_27634 = (state_27638[2]);var state_27638__$1 = state_27638;var statearr_27645_28716 = state_27638__$1;(statearr_27645_28716[2] = inst_27634);
(statearr_27645_28716[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27639 === 7))
{var inst_27617 = (state_27638[8]);var inst_27618 = (state_27638[9]);var inst_27617__$1 = (state_27638[2]);var inst_27618__$1 = cljs.core.nth.call(null,inst_27617__$1,0,null);var inst_27619 = cljs.core.nth.call(null,inst_27617__$1,1,null);var inst_27620 = (inst_27618__$1 == null);var state_27638__$1 = (function (){var statearr_27646 = state_27638;(statearr_27646[10] = inst_27619);
(statearr_27646[8] = inst_27617__$1);
(statearr_27646[9] = inst_27618__$1);
return statearr_27646;
})();if(cljs.core.truth_(inst_27620))
{var statearr_27647_28717 = state_27638__$1;(statearr_27647_28717[1] = 8);
} else
{var statearr_27648_28718 = state_27638__$1;(statearr_27648_28718[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27639 === 8))
{var inst_27619 = (state_27638[10]);var inst_27610 = (state_27638[7]);var inst_27617 = (state_27638[8]);var inst_27618 = (state_27638[9]);var inst_27622 = (function (){var c = inst_27619;var v = inst_27618;var vec__27615 = inst_27617;var cs = inst_27610;return ((function (c,v,vec__27615,cs,inst_27619,inst_27610,inst_27617,inst_27618,state_val_27639,c__22466__auto___28711,out){
return (function (p1__27555_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__27555_SHARP_);
});
;})(c,v,vec__27615,cs,inst_27619,inst_27610,inst_27617,inst_27618,state_val_27639,c__22466__auto___28711,out))
})();var inst_27623 = cljs.core.filterv.call(null,inst_27622,inst_27610);var inst_27610__$1 = inst_27623;var state_27638__$1 = (function (){var statearr_27649 = state_27638;(statearr_27649[7] = inst_27610__$1);
return statearr_27649;
})();var statearr_27650_28719 = state_27638__$1;(statearr_27650_28719[2] = null);
(statearr_27650_28719[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27639 === 9))
{var inst_27618 = (state_27638[9]);var state_27638__$1 = state_27638;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27638__$1,11,out,inst_27618);
} else
{if((state_val_27639 === 10))
{var inst_27630 = (state_27638[2]);var state_27638__$1 = state_27638;var statearr_27652_28720 = state_27638__$1;(statearr_27652_28720[2] = inst_27630);
(statearr_27652_28720[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27639 === 11))
{var inst_27610 = (state_27638[7]);var inst_27627 = (state_27638[2]);var tmp27651 = inst_27610;var inst_27610__$1 = tmp27651;var state_27638__$1 = (function (){var statearr_27653 = state_27638;(statearr_27653[11] = inst_27627);
(statearr_27653[7] = inst_27610__$1);
return statearr_27653;
})();var statearr_27654_28721 = state_27638__$1;(statearr_27654_28721[2] = null);
(statearr_27654_28721[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22466__auto___28711,out))
;return ((function (switch__22390__auto__,c__22466__auto___28711,out){
return (function() {
var state_machine__22391__auto__ = null;
var state_machine__22391__auto____0 = (function (){var statearr_27658 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27658[0] = state_machine__22391__auto__);
(statearr_27658[1] = 1);
return statearr_27658;
});
var state_machine__22391__auto____1 = (function (state_27638){while(true){
var ret_value__22392__auto__ = (function (){try{while(true){
var result__22393__auto__ = switch__22390__auto__.call(null,state_27638);if(cljs.core.keyword_identical_QMARK_.call(null,result__22393__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22393__auto__;
}
break;
}
}catch (e27659){if((e27659 instanceof Object))
{var ex__22394__auto__ = e27659;var statearr_27660_28722 = state_27638;(statearr_27660_28722[5] = ex__22394__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27638);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27659;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22392__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28723 = state_27638;
state_27638 = G__28723;
continue;
}
} else
{return ret_value__22392__auto__;
}
break;
}
});
state_machine__22391__auto__ = function(state_27638){
switch(arguments.length){
case 0:
return state_machine__22391__auto____0.call(this);
case 1:
return state_machine__22391__auto____1.call(this,state_27638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22391__auto____0;
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22391__auto____1;
return state_machine__22391__auto__;
})()
;})(switch__22390__auto__,c__22466__auto___28711,out))
})();var state__22468__auto__ = (function (){var statearr_27661 = f__22467__auto__.call(null);(statearr_27661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22466__auto___28711);
return statearr_27661;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22468__auto__);
});})(c__22466__auto___28711,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22466__auto___28724 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22466__auto___28724,out){
return (function (){var f__22467__auto__ = (function (){var switch__22390__auto__ = ((function (c__22466__auto___28724,out){
return (function (state_27731){var state_val_27732 = (state_27731[1]);if((state_val_27732 === 1))
{var inst_27708 = 0;var state_27731__$1 = (function (){var statearr_27733 = state_27731;(statearr_27733[7] = inst_27708);
return statearr_27733;
})();var statearr_27734_28725 = state_27731__$1;(statearr_27734_28725[2] = null);
(statearr_27734_28725[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27732 === 2))
{var inst_27708 = (state_27731[7]);var inst_27710 = (inst_27708 < n);var state_27731__$1 = state_27731;if(cljs.core.truth_(inst_27710))
{var statearr_27735_28726 = state_27731__$1;(statearr_27735_28726[1] = 4);
} else
{var statearr_27736_28727 = state_27731__$1;(statearr_27736_28727[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27732 === 3))
{var inst_27728 = (state_27731[2]);var inst_27729 = cljs.core.async.close_BANG_.call(null,out);var state_27731__$1 = (function (){var statearr_27737 = state_27731;(statearr_27737[8] = inst_27728);
return statearr_27737;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27731__$1,inst_27729);
} else
{if((state_val_27732 === 4))
{var state_27731__$1 = state_27731;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27731__$1,7,ch);
} else
{if((state_val_27732 === 5))
{var state_27731__$1 = state_27731;var statearr_27738_28728 = state_27731__$1;(statearr_27738_28728[2] = null);
(statearr_27738_28728[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27732 === 6))
{var inst_27726 = (state_27731[2]);var state_27731__$1 = state_27731;var statearr_27739_28729 = state_27731__$1;(statearr_27739_28729[2] = inst_27726);
(statearr_27739_28729[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27732 === 7))
{var inst_27713 = (state_27731[9]);var inst_27713__$1 = (state_27731[2]);var inst_27714 = (inst_27713__$1 == null);var inst_27715 = cljs.core.not.call(null,inst_27714);var state_27731__$1 = (function (){var statearr_27740 = state_27731;(statearr_27740[9] = inst_27713__$1);
return statearr_27740;
})();if(inst_27715)
{var statearr_27741_28730 = state_27731__$1;(statearr_27741_28730[1] = 8);
} else
{var statearr_27742_28731 = state_27731__$1;(statearr_27742_28731[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27732 === 8))
{var inst_27713 = (state_27731[9]);var state_27731__$1 = state_27731;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27731__$1,11,out,inst_27713);
} else
{if((state_val_27732 === 9))
{var state_27731__$1 = state_27731;var statearr_27743_28732 = state_27731__$1;(statearr_27743_28732[2] = null);
(statearr_27743_28732[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27732 === 10))
{var inst_27723 = (state_27731[2]);var state_27731__$1 = state_27731;var statearr_27744_28733 = state_27731__$1;(statearr_27744_28733[2] = inst_27723);
(statearr_27744_28733[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27732 === 11))
{var inst_27708 = (state_27731[7]);var inst_27718 = (state_27731[2]);var inst_27719 = (inst_27708 + 1);var inst_27708__$1 = inst_27719;var state_27731__$1 = (function (){var statearr_27745 = state_27731;(statearr_27745[7] = inst_27708__$1);
(statearr_27745[10] = inst_27718);
return statearr_27745;
})();var statearr_27746_28734 = state_27731__$1;(statearr_27746_28734[2] = null);
(statearr_27746_28734[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22466__auto___28724,out))
;return ((function (switch__22390__auto__,c__22466__auto___28724,out){
return (function() {
var state_machine__22391__auto__ = null;
var state_machine__22391__auto____0 = (function (){var statearr_27750 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27750[0] = state_machine__22391__auto__);
(statearr_27750[1] = 1);
return statearr_27750;
});
var state_machine__22391__auto____1 = (function (state_27731){while(true){
var ret_value__22392__auto__ = (function (){try{while(true){
var result__22393__auto__ = switch__22390__auto__.call(null,state_27731);if(cljs.core.keyword_identical_QMARK_.call(null,result__22393__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22393__auto__;
}
break;
}
}catch (e27751){if((e27751 instanceof Object))
{var ex__22394__auto__ = e27751;var statearr_27752_28735 = state_27731;(statearr_27752_28735[5] = ex__22394__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27731);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27751;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22392__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28736 = state_27731;
state_27731 = G__28736;
continue;
}
} else
{return ret_value__22392__auto__;
}
break;
}
});
state_machine__22391__auto__ = function(state_27731){
switch(arguments.length){
case 0:
return state_machine__22391__auto____0.call(this);
case 1:
return state_machine__22391__auto____1.call(this,state_27731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22391__auto____0;
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22391__auto____1;
return state_machine__22391__auto__;
})()
;})(switch__22390__auto__,c__22466__auto___28724,out))
})();var state__22468__auto__ = (function (){var statearr_27753 = f__22467__auto__.call(null);(statearr_27753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22466__auto___28724);
return statearr_27753;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22468__auto__);
});})(c__22466__auto___28724,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t27761 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27761 = (function (ch,f,map_LT_,meta27762){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27762 = meta27762;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27761.cljs$lang$type = true;
cljs.core.async.t27761.cljs$lang$ctorStr = "cljs.core.async/t27761";
cljs.core.async.t27761.cljs$lang$ctorPrWriter = (function (this__20371__auto__,writer__20372__auto__,opt__20373__auto__){return cljs.core._write.call(null,writer__20372__auto__,"cljs.core.async/t27761");
});
cljs.core.async.t27761.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27761.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t27761.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27761.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t27764 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27764 = (function (fn1,_,meta27762,ch,f,map_LT_,meta27765){
this.fn1 = fn1;
this._ = _;
this.meta27762 = meta27762;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27765 = meta27765;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27764.cljs$lang$type = true;
cljs.core.async.t27764.cljs$lang$ctorStr = "cljs.core.async/t27764";
cljs.core.async.t27764.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20371__auto__,writer__20372__auto__,opt__20373__auto__){return cljs.core._write.call(null,writer__20372__auto__,"cljs.core.async/t27764");
});})(___$1))
;
cljs.core.async.t27764.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27764.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t27764.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t27764.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__27754_SHARP_){return f1.call(null,(((p1__27754_SHARP_ == null))?null:self__.f.call(null,p1__27754_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t27764.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27766){var self__ = this;
var _27766__$1 = this;return self__.meta27765;
});})(___$1))
;
cljs.core.async.t27764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27766,meta27765__$1){var self__ = this;
var _27766__$1 = this;return (new cljs.core.async.t27764(self__.fn1,self__._,self__.meta27762,self__.ch,self__.f,self__.map_LT_,meta27765__$1));
});})(___$1))
;
cljs.core.async.__GT_t27764 = ((function (___$1){
return (function __GT_t27764(fn1__$1,___$2,meta27762__$1,ch__$2,f__$2,map_LT___$2,meta27765){return (new cljs.core.async.t27764(fn1__$1,___$2,meta27762__$1,ch__$2,f__$2,map_LT___$2,meta27765));
});})(___$1))
;
}
return (new cljs.core.async.t27764(fn1,___$1,self__.meta27762,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__19792__auto__ = ret;if(cljs.core.truth_(and__19792__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__19792__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t27761.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27761.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27761.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t27761.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27763){var self__ = this;
var _27763__$1 = this;return self__.meta27762;
});
cljs.core.async.t27761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27763,meta27762__$1){var self__ = this;
var _27763__$1 = this;return (new cljs.core.async.t27761(self__.ch,self__.f,self__.map_LT_,meta27762__$1));
});
cljs.core.async.__GT_t27761 = (function __GT_t27761(ch__$1,f__$1,map_LT___$1,meta27762){return (new cljs.core.async.t27761(ch__$1,f__$1,map_LT___$1,meta27762));
});
}
return (new cljs.core.async.t27761(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t27770 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27770 = (function (ch,f,map_GT_,meta27771){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta27771 = meta27771;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27770.cljs$lang$type = true;
cljs.core.async.t27770.cljs$lang$ctorStr = "cljs.core.async/t27770";
cljs.core.async.t27770.cljs$lang$ctorPrWriter = (function (this__20371__auto__,writer__20372__auto__,opt__20373__auto__){return cljs.core._write.call(null,writer__20372__auto__,"cljs.core.async/t27770");
});
cljs.core.async.t27770.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27770.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t27770.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27770.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t27770.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27770.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27770.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27772){var self__ = this;
var _27772__$1 = this;return self__.meta27771;
});
cljs.core.async.t27770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27772,meta27771__$1){var self__ = this;
var _27772__$1 = this;return (new cljs.core.async.t27770(self__.ch,self__.f,self__.map_GT_,meta27771__$1));
});
cljs.core.async.__GT_t27770 = (function __GT_t27770(ch__$1,f__$1,map_GT___$1,meta27771){return (new cljs.core.async.t27770(ch__$1,f__$1,map_GT___$1,meta27771));
});
}
return (new cljs.core.async.t27770(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t27776 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27776 = (function (ch,p,filter_GT_,meta27777){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta27777 = meta27777;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27776.cljs$lang$type = true;
cljs.core.async.t27776.cljs$lang$ctorStr = "cljs.core.async/t27776";
cljs.core.async.t27776.cljs$lang$ctorPrWriter = (function (this__20371__auto__,writer__20372__auto__,opt__20373__auto__){return cljs.core._write.call(null,writer__20372__auto__,"cljs.core.async/t27776");
});
cljs.core.async.t27776.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27776.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t27776.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27776.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t27776.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27776.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27776.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t27776.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27778){var self__ = this;
var _27778__$1 = this;return self__.meta27777;
});
cljs.core.async.t27776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27778,meta27777__$1){var self__ = this;
var _27778__$1 = this;return (new cljs.core.async.t27776(self__.ch,self__.p,self__.filter_GT_,meta27777__$1));
});
cljs.core.async.__GT_t27776 = (function __GT_t27776(ch__$1,p__$1,filter_GT___$1,meta27777){return (new cljs.core.async.t27776(ch__$1,p__$1,filter_GT___$1,meta27777));
});
}
return (new cljs.core.async.t27776(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22466__auto___28737 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22466__auto___28737,out){
return (function (){var f__22467__auto__ = (function (){var switch__22390__auto__ = ((function (c__22466__auto___28737,out){
return (function (state_27840){var state_val_27841 = (state_27840[1]);if((state_val_27841 === 1))
{var state_27840__$1 = state_27840;var statearr_27842_28738 = state_27840__$1;(statearr_27842_28738[2] = null);
(statearr_27842_28738[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27841 === 2))
{var state_27840__$1 = state_27840;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27840__$1,4,ch);
} else
{if((state_val_27841 === 3))
{var inst_27838 = (state_27840[2]);var state_27840__$1 = state_27840;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27840__$1,inst_27838);
} else
{if((state_val_27841 === 4))
{var inst_27822 = (state_27840[7]);var inst_27822__$1 = (state_27840[2]);var inst_27823 = (inst_27822__$1 == null);var state_27840__$1 = (function (){var statearr_27843 = state_27840;(statearr_27843[7] = inst_27822__$1);
return statearr_27843;
})();if(cljs.core.truth_(inst_27823))
{var statearr_27844_28739 = state_27840__$1;(statearr_27844_28739[1] = 5);
} else
{var statearr_27845_28740 = state_27840__$1;(statearr_27845_28740[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27841 === 5))
{var inst_27825 = cljs.core.async.close_BANG_.call(null,out);var state_27840__$1 = state_27840;var statearr_27846_28741 = state_27840__$1;(statearr_27846_28741[2] = inst_27825);
(statearr_27846_28741[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27841 === 6))
{var inst_27822 = (state_27840[7]);var inst_27827 = p.call(null,inst_27822);var state_27840__$1 = state_27840;if(cljs.core.truth_(inst_27827))
{var statearr_27847_28742 = state_27840__$1;(statearr_27847_28742[1] = 8);
} else
{var statearr_27848_28743 = state_27840__$1;(statearr_27848_28743[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27841 === 7))
{var inst_27836 = (state_27840[2]);var state_27840__$1 = state_27840;var statearr_27849_28744 = state_27840__$1;(statearr_27849_28744[2] = inst_27836);
(statearr_27849_28744[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27841 === 8))
{var inst_27822 = (state_27840[7]);var state_27840__$1 = state_27840;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27840__$1,11,out,inst_27822);
} else
{if((state_val_27841 === 9))
{var state_27840__$1 = state_27840;var statearr_27850_28745 = state_27840__$1;(statearr_27850_28745[2] = null);
(statearr_27850_28745[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27841 === 10))
{var inst_27833 = (state_27840[2]);var state_27840__$1 = (function (){var statearr_27851 = state_27840;(statearr_27851[8] = inst_27833);
return statearr_27851;
})();var statearr_27852_28746 = state_27840__$1;(statearr_27852_28746[2] = null);
(statearr_27852_28746[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27841 === 11))
{var inst_27830 = (state_27840[2]);var state_27840__$1 = state_27840;var statearr_27853_28747 = state_27840__$1;(statearr_27853_28747[2] = inst_27830);
(statearr_27853_28747[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22466__auto___28737,out))
;return ((function (switch__22390__auto__,c__22466__auto___28737,out){
return (function() {
var state_machine__22391__auto__ = null;
var state_machine__22391__auto____0 = (function (){var statearr_27857 = [null,null,null,null,null,null,null,null,null];(statearr_27857[0] = state_machine__22391__auto__);
(statearr_27857[1] = 1);
return statearr_27857;
});
var state_machine__22391__auto____1 = (function (state_27840){while(true){
var ret_value__22392__auto__ = (function (){try{while(true){
var result__22393__auto__ = switch__22390__auto__.call(null,state_27840);if(cljs.core.keyword_identical_QMARK_.call(null,result__22393__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22393__auto__;
}
break;
}
}catch (e27858){if((e27858 instanceof Object))
{var ex__22394__auto__ = e27858;var statearr_27859_28748 = state_27840;(statearr_27859_28748[5] = ex__22394__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27840);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27858;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22392__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28749 = state_27840;
state_27840 = G__28749;
continue;
}
} else
{return ret_value__22392__auto__;
}
break;
}
});
state_machine__22391__auto__ = function(state_27840){
switch(arguments.length){
case 0:
return state_machine__22391__auto____0.call(this);
case 1:
return state_machine__22391__auto____1.call(this,state_27840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22391__auto____0;
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22391__auto____1;
return state_machine__22391__auto__;
})()
;})(switch__22390__auto__,c__22466__auto___28737,out))
})();var state__22468__auto__ = (function (){var statearr_27860 = f__22467__auto__.call(null);(statearr_27860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22466__auto___28737);
return statearr_27860;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22468__auto__);
});})(c__22466__auto___28737,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__22466__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22466__auto__){
return (function (){var f__22467__auto__ = (function (){var switch__22390__auto__ = ((function (c__22466__auto__){
return (function (state_28026){var state_val_28027 = (state_28026[1]);if((state_val_28027 === 1))
{var state_28026__$1 = state_28026;var statearr_28028_28750 = state_28026__$1;(statearr_28028_28750[2] = null);
(statearr_28028_28750[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28027 === 2))
{var state_28026__$1 = state_28026;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28026__$1,4,in$);
} else
{if((state_val_28027 === 3))
{var inst_28024 = (state_28026[2]);var state_28026__$1 = state_28026;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28026__$1,inst_28024);
} else
{if((state_val_28027 === 4))
{var inst_27967 = (state_28026[7]);var inst_27967__$1 = (state_28026[2]);var inst_27968 = (inst_27967__$1 == null);var state_28026__$1 = (function (){var statearr_28029 = state_28026;(statearr_28029[7] = inst_27967__$1);
return statearr_28029;
})();if(cljs.core.truth_(inst_27968))
{var statearr_28030_28751 = state_28026__$1;(statearr_28030_28751[1] = 5);
} else
{var statearr_28031_28752 = state_28026__$1;(statearr_28031_28752[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28027 === 5))
{var inst_27970 = cljs.core.async.close_BANG_.call(null,out);var state_28026__$1 = state_28026;var statearr_28032_28753 = state_28026__$1;(statearr_28032_28753[2] = inst_27970);
(statearr_28032_28753[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28027 === 6))
{var inst_27967 = (state_28026[7]);var inst_27976 = f.call(null,inst_27967);var inst_27977 = cljs.core.seq.call(null,inst_27976);var inst_27978 = inst_27977;var inst_27979 = null;var inst_27980 = 0;var inst_27981 = 0;var state_28026__$1 = (function (){var statearr_28033 = state_28026;(statearr_28033[8] = inst_27978);
(statearr_28033[9] = inst_27979);
(statearr_28033[10] = inst_27981);
(statearr_28033[11] = inst_27980);
return statearr_28033;
})();var statearr_28034_28754 = state_28026__$1;(statearr_28034_28754[2] = null);
(statearr_28034_28754[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28027 === 7))
{var inst_28022 = (state_28026[2]);var state_28026__$1 = state_28026;var statearr_28035_28755 = state_28026__$1;(statearr_28035_28755[2] = inst_28022);
(statearr_28035_28755[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28027 === 8))
{var inst_27981 = (state_28026[10]);var inst_27980 = (state_28026[11]);var inst_27983 = (inst_27981 < inst_27980);var inst_27984 = inst_27983;var state_28026__$1 = state_28026;if(cljs.core.truth_(inst_27984))
{var statearr_28036_28756 = state_28026__$1;(statearr_28036_28756[1] = 10);
} else
{var statearr_28037_28757 = state_28026__$1;(statearr_28037_28757[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28027 === 9))
{var inst_28014 = (state_28026[2]);var inst_28015 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_28026__$1 = (function (){var statearr_28038 = state_28026;(statearr_28038[12] = inst_28014);
return statearr_28038;
})();if(cljs.core.truth_(inst_28015))
{var statearr_28039_28758 = state_28026__$1;(statearr_28039_28758[1] = 21);
} else
{var statearr_28040_28759 = state_28026__$1;(statearr_28040_28759[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28027 === 10))
{var inst_27979 = (state_28026[9]);var inst_27981 = (state_28026[10]);var inst_27986 = cljs.core._nth.call(null,inst_27979,inst_27981);var state_28026__$1 = state_28026;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28026__$1,13,out,inst_27986);
} else
{if((state_val_28027 === 11))
{var inst_27992 = (state_28026[13]);var inst_27978 = (state_28026[8]);var inst_27992__$1 = cljs.core.seq.call(null,inst_27978);var state_28026__$1 = (function (){var statearr_28044 = state_28026;(statearr_28044[13] = inst_27992__$1);
return statearr_28044;
})();if(inst_27992__$1)
{var statearr_28045_28760 = state_28026__$1;(statearr_28045_28760[1] = 14);
} else
{var statearr_28046_28761 = state_28026__$1;(statearr_28046_28761[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28027 === 12))
{var inst_28012 = (state_28026[2]);var state_28026__$1 = state_28026;var statearr_28047_28762 = state_28026__$1;(statearr_28047_28762[2] = inst_28012);
(statearr_28047_28762[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28027 === 13))
{var inst_27978 = (state_28026[8]);var inst_27979 = (state_28026[9]);var inst_27981 = (state_28026[10]);var inst_27980 = (state_28026[11]);var inst_27988 = (state_28026[2]);var inst_27989 = (inst_27981 + 1);var tmp28041 = inst_27978;var tmp28042 = inst_27979;var tmp28043 = inst_27980;var inst_27978__$1 = tmp28041;var inst_27979__$1 = tmp28042;var inst_27980__$1 = tmp28043;var inst_27981__$1 = inst_27989;var state_28026__$1 = (function (){var statearr_28048 = state_28026;(statearr_28048[8] = inst_27978__$1);
(statearr_28048[14] = inst_27988);
(statearr_28048[9] = inst_27979__$1);
(statearr_28048[10] = inst_27981__$1);
(statearr_28048[11] = inst_27980__$1);
return statearr_28048;
})();var statearr_28049_28763 = state_28026__$1;(statearr_28049_28763[2] = null);
(statearr_28049_28763[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28027 === 14))
{var inst_27992 = (state_28026[13]);var inst_27994 = cljs.core.chunked_seq_QMARK_.call(null,inst_27992);var state_28026__$1 = state_28026;if(inst_27994)
{var statearr_28050_28764 = state_28026__$1;(statearr_28050_28764[1] = 17);
} else
{var statearr_28051_28765 = state_28026__$1;(statearr_28051_28765[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28027 === 15))
{var state_28026__$1 = state_28026;var statearr_28052_28766 = state_28026__$1;(statearr_28052_28766[2] = null);
(statearr_28052_28766[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28027 === 16))
{var inst_28010 = (state_28026[2]);var state_28026__$1 = state_28026;var statearr_28053_28767 = state_28026__$1;(statearr_28053_28767[2] = inst_28010);
(statearr_28053_28767[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28027 === 17))
{var inst_27992 = (state_28026[13]);var inst_27996 = cljs.core.chunk_first.call(null,inst_27992);var inst_27997 = cljs.core.chunk_rest.call(null,inst_27992);var inst_27998 = cljs.core.count.call(null,inst_27996);var inst_27978 = inst_27997;var inst_27979 = inst_27996;var inst_27980 = inst_27998;var inst_27981 = 0;var state_28026__$1 = (function (){var statearr_28054 = state_28026;(statearr_28054[8] = inst_27978);
(statearr_28054[9] = inst_27979);
(statearr_28054[10] = inst_27981);
(statearr_28054[11] = inst_27980);
return statearr_28054;
})();var statearr_28055_28768 = state_28026__$1;(statearr_28055_28768[2] = null);
(statearr_28055_28768[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28027 === 18))
{var inst_27992 = (state_28026[13]);var inst_28001 = cljs.core.first.call(null,inst_27992);var state_28026__$1 = state_28026;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28026__$1,20,out,inst_28001);
} else
{if((state_val_28027 === 19))
{var inst_28007 = (state_28026[2]);var state_28026__$1 = state_28026;var statearr_28056_28769 = state_28026__$1;(statearr_28056_28769[2] = inst_28007);
(statearr_28056_28769[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28027 === 20))
{var inst_27992 = (state_28026[13]);var inst_28003 = (state_28026[2]);var inst_28004 = cljs.core.next.call(null,inst_27992);var inst_27978 = inst_28004;var inst_27979 = null;var inst_27980 = 0;var inst_27981 = 0;var state_28026__$1 = (function (){var statearr_28057 = state_28026;(statearr_28057[15] = inst_28003);
(statearr_28057[8] = inst_27978);
(statearr_28057[9] = inst_27979);
(statearr_28057[10] = inst_27981);
(statearr_28057[11] = inst_27980);
return statearr_28057;
})();var statearr_28058_28770 = state_28026__$1;(statearr_28058_28770[2] = null);
(statearr_28058_28770[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28027 === 21))
{var state_28026__$1 = state_28026;var statearr_28059_28771 = state_28026__$1;(statearr_28059_28771[2] = null);
(statearr_28059_28771[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28027 === 22))
{var state_28026__$1 = state_28026;var statearr_28060_28772 = state_28026__$1;(statearr_28060_28772[2] = null);
(statearr_28060_28772[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28027 === 23))
{var inst_28020 = (state_28026[2]);var state_28026__$1 = state_28026;var statearr_28061_28773 = state_28026__$1;(statearr_28061_28773[2] = inst_28020);
(statearr_28061_28773[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22466__auto__))
;return ((function (switch__22390__auto__,c__22466__auto__){
return (function() {
var state_machine__22391__auto__ = null;
var state_machine__22391__auto____0 = (function (){var statearr_28065 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28065[0] = state_machine__22391__auto__);
(statearr_28065[1] = 1);
return statearr_28065;
});
var state_machine__22391__auto____1 = (function (state_28026){while(true){
var ret_value__22392__auto__ = (function (){try{while(true){
var result__22393__auto__ = switch__22390__auto__.call(null,state_28026);if(cljs.core.keyword_identical_QMARK_.call(null,result__22393__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22393__auto__;
}
break;
}
}catch (e28066){if((e28066 instanceof Object))
{var ex__22394__auto__ = e28066;var statearr_28067_28774 = state_28026;(statearr_28067_28774[5] = ex__22394__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28026);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28066;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22392__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28775 = state_28026;
state_28026 = G__28775;
continue;
}
} else
{return ret_value__22392__auto__;
}
break;
}
});
state_machine__22391__auto__ = function(state_28026){
switch(arguments.length){
case 0:
return state_machine__22391__auto____0.call(this);
case 1:
return state_machine__22391__auto____1.call(this,state_28026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22391__auto____0;
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22391__auto____1;
return state_machine__22391__auto__;
})()
;})(switch__22390__auto__,c__22466__auto__))
})();var state__22468__auto__ = (function (){var statearr_28068 = f__22467__auto__.call(null);(statearr_28068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22466__auto__);
return statearr_28068;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22468__auto__);
});})(c__22466__auto__))
);
return c__22466__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22466__auto___28776 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22466__auto___28776,out){
return (function (){var f__22467__auto__ = (function (){var switch__22390__auto__ = ((function (c__22466__auto___28776,out){
return (function (state_28140){var state_val_28141 = (state_28140[1]);if((state_val_28141 === 1))
{var inst_28117 = null;var state_28140__$1 = (function (){var statearr_28142 = state_28140;(statearr_28142[7] = inst_28117);
return statearr_28142;
})();var statearr_28143_28777 = state_28140__$1;(statearr_28143_28777[2] = null);
(statearr_28143_28777[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28141 === 2))
{var state_28140__$1 = state_28140;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28140__$1,4,ch);
} else
{if((state_val_28141 === 3))
{var inst_28137 = (state_28140[2]);var inst_28138 = cljs.core.async.close_BANG_.call(null,out);var state_28140__$1 = (function (){var statearr_28144 = state_28140;(statearr_28144[8] = inst_28137);
return statearr_28144;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28140__$1,inst_28138);
} else
{if((state_val_28141 === 4))
{var inst_28120 = (state_28140[9]);var inst_28120__$1 = (state_28140[2]);var inst_28121 = (inst_28120__$1 == null);var inst_28122 = cljs.core.not.call(null,inst_28121);var state_28140__$1 = (function (){var statearr_28145 = state_28140;(statearr_28145[9] = inst_28120__$1);
return statearr_28145;
})();if(inst_28122)
{var statearr_28146_28778 = state_28140__$1;(statearr_28146_28778[1] = 5);
} else
{var statearr_28147_28779 = state_28140__$1;(statearr_28147_28779[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28141 === 5))
{var inst_28120 = (state_28140[9]);var inst_28117 = (state_28140[7]);var inst_28124 = cljs.core._EQ_.call(null,inst_28120,inst_28117);var state_28140__$1 = state_28140;if(inst_28124)
{var statearr_28148_28780 = state_28140__$1;(statearr_28148_28780[1] = 8);
} else
{var statearr_28149_28781 = state_28140__$1;(statearr_28149_28781[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28141 === 6))
{var state_28140__$1 = state_28140;var statearr_28151_28782 = state_28140__$1;(statearr_28151_28782[2] = null);
(statearr_28151_28782[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28141 === 7))
{var inst_28135 = (state_28140[2]);var state_28140__$1 = state_28140;var statearr_28152_28783 = state_28140__$1;(statearr_28152_28783[2] = inst_28135);
(statearr_28152_28783[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28141 === 8))
{var inst_28117 = (state_28140[7]);var tmp28150 = inst_28117;var inst_28117__$1 = tmp28150;var state_28140__$1 = (function (){var statearr_28153 = state_28140;(statearr_28153[7] = inst_28117__$1);
return statearr_28153;
})();var statearr_28154_28784 = state_28140__$1;(statearr_28154_28784[2] = null);
(statearr_28154_28784[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28141 === 9))
{var inst_28120 = (state_28140[9]);var state_28140__$1 = state_28140;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28140__$1,11,out,inst_28120);
} else
{if((state_val_28141 === 10))
{var inst_28132 = (state_28140[2]);var state_28140__$1 = state_28140;var statearr_28155_28785 = state_28140__$1;(statearr_28155_28785[2] = inst_28132);
(statearr_28155_28785[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28141 === 11))
{var inst_28120 = (state_28140[9]);var inst_28129 = (state_28140[2]);var inst_28117 = inst_28120;var state_28140__$1 = (function (){var statearr_28156 = state_28140;(statearr_28156[10] = inst_28129);
(statearr_28156[7] = inst_28117);
return statearr_28156;
})();var statearr_28157_28786 = state_28140__$1;(statearr_28157_28786[2] = null);
(statearr_28157_28786[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22466__auto___28776,out))
;return ((function (switch__22390__auto__,c__22466__auto___28776,out){
return (function() {
var state_machine__22391__auto__ = null;
var state_machine__22391__auto____0 = (function (){var statearr_28161 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_28161[0] = state_machine__22391__auto__);
(statearr_28161[1] = 1);
return statearr_28161;
});
var state_machine__22391__auto____1 = (function (state_28140){while(true){
var ret_value__22392__auto__ = (function (){try{while(true){
var result__22393__auto__ = switch__22390__auto__.call(null,state_28140);if(cljs.core.keyword_identical_QMARK_.call(null,result__22393__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22393__auto__;
}
break;
}
}catch (e28162){if((e28162 instanceof Object))
{var ex__22394__auto__ = e28162;var statearr_28163_28787 = state_28140;(statearr_28163_28787[5] = ex__22394__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28140);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28162;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22392__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28788 = state_28140;
state_28140 = G__28788;
continue;
}
} else
{return ret_value__22392__auto__;
}
break;
}
});
state_machine__22391__auto__ = function(state_28140){
switch(arguments.length){
case 0:
return state_machine__22391__auto____0.call(this);
case 1:
return state_machine__22391__auto____1.call(this,state_28140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22391__auto____0;
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22391__auto____1;
return state_machine__22391__auto__;
})()
;})(switch__22390__auto__,c__22466__auto___28776,out))
})();var state__22468__auto__ = (function (){var statearr_28164 = f__22467__auto__.call(null);(statearr_28164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22466__auto___28776);
return statearr_28164;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22468__auto__);
});})(c__22466__auto___28776,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22466__auto___28789 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22466__auto___28789,out){
return (function (){var f__22467__auto__ = (function (){var switch__22390__auto__ = ((function (c__22466__auto___28789,out){
return (function (state_28269){var state_val_28270 = (state_28269[1]);if((state_val_28270 === 1))
{var inst_28232 = (new Array(n));var inst_28233 = inst_28232;var inst_28234 = 0;var state_28269__$1 = (function (){var statearr_28271 = state_28269;(statearr_28271[7] = inst_28234);
(statearr_28271[8] = inst_28233);
return statearr_28271;
})();var statearr_28272_28790 = state_28269__$1;(statearr_28272_28790[2] = null);
(statearr_28272_28790[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28270 === 2))
{var state_28269__$1 = state_28269;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28269__$1,4,ch);
} else
{if((state_val_28270 === 3))
{var inst_28267 = (state_28269[2]);var state_28269__$1 = state_28269;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28269__$1,inst_28267);
} else
{if((state_val_28270 === 4))
{var inst_28237 = (state_28269[9]);var inst_28237__$1 = (state_28269[2]);var inst_28238 = (inst_28237__$1 == null);var inst_28239 = cljs.core.not.call(null,inst_28238);var state_28269__$1 = (function (){var statearr_28273 = state_28269;(statearr_28273[9] = inst_28237__$1);
return statearr_28273;
})();if(inst_28239)
{var statearr_28274_28791 = state_28269__$1;(statearr_28274_28791[1] = 5);
} else
{var statearr_28275_28792 = state_28269__$1;(statearr_28275_28792[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28270 === 5))
{var inst_28242 = (state_28269[10]);var inst_28237 = (state_28269[9]);var inst_28234 = (state_28269[7]);var inst_28233 = (state_28269[8]);var inst_28241 = (inst_28233[inst_28234] = inst_28237);var inst_28242__$1 = (inst_28234 + 1);var inst_28243 = (inst_28242__$1 < n);var state_28269__$1 = (function (){var statearr_28276 = state_28269;(statearr_28276[10] = inst_28242__$1);
(statearr_28276[11] = inst_28241);
return statearr_28276;
})();if(cljs.core.truth_(inst_28243))
{var statearr_28277_28793 = state_28269__$1;(statearr_28277_28793[1] = 8);
} else
{var statearr_28278_28794 = state_28269__$1;(statearr_28278_28794[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28270 === 6))
{var inst_28234 = (state_28269[7]);var inst_28255 = (inst_28234 > 0);var state_28269__$1 = state_28269;if(cljs.core.truth_(inst_28255))
{var statearr_28280_28795 = state_28269__$1;(statearr_28280_28795[1] = 12);
} else
{var statearr_28281_28796 = state_28269__$1;(statearr_28281_28796[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28270 === 7))
{var inst_28265 = (state_28269[2]);var state_28269__$1 = state_28269;var statearr_28282_28797 = state_28269__$1;(statearr_28282_28797[2] = inst_28265);
(statearr_28282_28797[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28270 === 8))
{var inst_28242 = (state_28269[10]);var inst_28233 = (state_28269[8]);var tmp28279 = inst_28233;var inst_28233__$1 = tmp28279;var inst_28234 = inst_28242;var state_28269__$1 = (function (){var statearr_28283 = state_28269;(statearr_28283[7] = inst_28234);
(statearr_28283[8] = inst_28233__$1);
return statearr_28283;
})();var statearr_28284_28798 = state_28269__$1;(statearr_28284_28798[2] = null);
(statearr_28284_28798[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28270 === 9))
{var inst_28233 = (state_28269[8]);var inst_28247 = cljs.core.vec.call(null,inst_28233);var state_28269__$1 = state_28269;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28269__$1,11,out,inst_28247);
} else
{if((state_val_28270 === 10))
{var inst_28253 = (state_28269[2]);var state_28269__$1 = state_28269;var statearr_28285_28799 = state_28269__$1;(statearr_28285_28799[2] = inst_28253);
(statearr_28285_28799[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28270 === 11))
{var inst_28249 = (state_28269[2]);var inst_28250 = (new Array(n));var inst_28233 = inst_28250;var inst_28234 = 0;var state_28269__$1 = (function (){var statearr_28286 = state_28269;(statearr_28286[12] = inst_28249);
(statearr_28286[7] = inst_28234);
(statearr_28286[8] = inst_28233);
return statearr_28286;
})();var statearr_28287_28800 = state_28269__$1;(statearr_28287_28800[2] = null);
(statearr_28287_28800[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28270 === 12))
{var inst_28233 = (state_28269[8]);var inst_28257 = cljs.core.vec.call(null,inst_28233);var state_28269__$1 = state_28269;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28269__$1,15,out,inst_28257);
} else
{if((state_val_28270 === 13))
{var state_28269__$1 = state_28269;var statearr_28288_28801 = state_28269__$1;(statearr_28288_28801[2] = null);
(statearr_28288_28801[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28270 === 14))
{var inst_28262 = (state_28269[2]);var inst_28263 = cljs.core.async.close_BANG_.call(null,out);var state_28269__$1 = (function (){var statearr_28289 = state_28269;(statearr_28289[13] = inst_28262);
return statearr_28289;
})();var statearr_28290_28802 = state_28269__$1;(statearr_28290_28802[2] = inst_28263);
(statearr_28290_28802[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28270 === 15))
{var inst_28259 = (state_28269[2]);var state_28269__$1 = state_28269;var statearr_28291_28803 = state_28269__$1;(statearr_28291_28803[2] = inst_28259);
(statearr_28291_28803[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22466__auto___28789,out))
;return ((function (switch__22390__auto__,c__22466__auto___28789,out){
return (function() {
var state_machine__22391__auto__ = null;
var state_machine__22391__auto____0 = (function (){var statearr_28295 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28295[0] = state_machine__22391__auto__);
(statearr_28295[1] = 1);
return statearr_28295;
});
var state_machine__22391__auto____1 = (function (state_28269){while(true){
var ret_value__22392__auto__ = (function (){try{while(true){
var result__22393__auto__ = switch__22390__auto__.call(null,state_28269);if(cljs.core.keyword_identical_QMARK_.call(null,result__22393__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22393__auto__;
}
break;
}
}catch (e28296){if((e28296 instanceof Object))
{var ex__22394__auto__ = e28296;var statearr_28297_28804 = state_28269;(statearr_28297_28804[5] = ex__22394__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28269);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28296;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22392__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28805 = state_28269;
state_28269 = G__28805;
continue;
}
} else
{return ret_value__22392__auto__;
}
break;
}
});
state_machine__22391__auto__ = function(state_28269){
switch(arguments.length){
case 0:
return state_machine__22391__auto____0.call(this);
case 1:
return state_machine__22391__auto____1.call(this,state_28269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22391__auto____0;
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22391__auto____1;
return state_machine__22391__auto__;
})()
;})(switch__22390__auto__,c__22466__auto___28789,out))
})();var state__22468__auto__ = (function (){var statearr_28298 = f__22467__auto__.call(null);(statearr_28298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22466__auto___28789);
return statearr_28298;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22468__auto__);
});})(c__22466__auto___28789,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22466__auto___28806 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22466__auto___28806,out){
return (function (){var f__22467__auto__ = (function (){var switch__22390__auto__ = ((function (c__22466__auto___28806,out){
return (function (state_28411){var state_val_28412 = (state_28411[1]);if((state_val_28412 === 1))
{var inst_28370 = [];var inst_28371 = inst_28370;var inst_28372 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_28411__$1 = (function (){var statearr_28413 = state_28411;(statearr_28413[7] = inst_28371);
(statearr_28413[8] = inst_28372);
return statearr_28413;
})();var statearr_28414_28807 = state_28411__$1;(statearr_28414_28807[2] = null);
(statearr_28414_28807[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28412 === 2))
{var state_28411__$1 = state_28411;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28411__$1,4,ch);
} else
{if((state_val_28412 === 3))
{var inst_28409 = (state_28411[2]);var state_28411__$1 = state_28411;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28411__$1,inst_28409);
} else
{if((state_val_28412 === 4))
{var inst_28375 = (state_28411[9]);var inst_28375__$1 = (state_28411[2]);var inst_28376 = (inst_28375__$1 == null);var inst_28377 = cljs.core.not.call(null,inst_28376);var state_28411__$1 = (function (){var statearr_28415 = state_28411;(statearr_28415[9] = inst_28375__$1);
return statearr_28415;
})();if(inst_28377)
{var statearr_28416_28808 = state_28411__$1;(statearr_28416_28808[1] = 5);
} else
{var statearr_28417_28809 = state_28411__$1;(statearr_28417_28809[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28412 === 5))
{var inst_28379 = (state_28411[10]);var inst_28375 = (state_28411[9]);var inst_28372 = (state_28411[8]);var inst_28379__$1 = f.call(null,inst_28375);var inst_28380 = cljs.core._EQ_.call(null,inst_28379__$1,inst_28372);var inst_28381 = cljs.core.keyword_identical_QMARK_.call(null,inst_28372,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_28382 = (inst_28380) || (inst_28381);var state_28411__$1 = (function (){var statearr_28418 = state_28411;(statearr_28418[10] = inst_28379__$1);
return statearr_28418;
})();if(cljs.core.truth_(inst_28382))
{var statearr_28419_28810 = state_28411__$1;(statearr_28419_28810[1] = 8);
} else
{var statearr_28420_28811 = state_28411__$1;(statearr_28420_28811[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28412 === 6))
{var inst_28371 = (state_28411[7]);var inst_28396 = inst_28371.length;var inst_28397 = (inst_28396 > 0);var state_28411__$1 = state_28411;if(cljs.core.truth_(inst_28397))
{var statearr_28422_28812 = state_28411__$1;(statearr_28422_28812[1] = 12);
} else
{var statearr_28423_28813 = state_28411__$1;(statearr_28423_28813[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28412 === 7))
{var inst_28407 = (state_28411[2]);var state_28411__$1 = state_28411;var statearr_28424_28814 = state_28411__$1;(statearr_28424_28814[2] = inst_28407);
(statearr_28424_28814[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28412 === 8))
{var inst_28379 = (state_28411[10]);var inst_28375 = (state_28411[9]);var inst_28371 = (state_28411[7]);var inst_28384 = inst_28371.push(inst_28375);var tmp28421 = inst_28371;var inst_28371__$1 = tmp28421;var inst_28372 = inst_28379;var state_28411__$1 = (function (){var statearr_28425 = state_28411;(statearr_28425[7] = inst_28371__$1);
(statearr_28425[8] = inst_28372);
(statearr_28425[11] = inst_28384);
return statearr_28425;
})();var statearr_28426_28815 = state_28411__$1;(statearr_28426_28815[2] = null);
(statearr_28426_28815[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28412 === 9))
{var inst_28371 = (state_28411[7]);var inst_28387 = cljs.core.vec.call(null,inst_28371);var state_28411__$1 = state_28411;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28411__$1,11,out,inst_28387);
} else
{if((state_val_28412 === 10))
{var inst_28394 = (state_28411[2]);var state_28411__$1 = state_28411;var statearr_28427_28816 = state_28411__$1;(statearr_28427_28816[2] = inst_28394);
(statearr_28427_28816[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28412 === 11))
{var inst_28379 = (state_28411[10]);var inst_28375 = (state_28411[9]);var inst_28389 = (state_28411[2]);var inst_28390 = [];var inst_28391 = inst_28390.push(inst_28375);var inst_28371 = inst_28390;var inst_28372 = inst_28379;var state_28411__$1 = (function (){var statearr_28428 = state_28411;(statearr_28428[12] = inst_28391);
(statearr_28428[7] = inst_28371);
(statearr_28428[13] = inst_28389);
(statearr_28428[8] = inst_28372);
return statearr_28428;
})();var statearr_28429_28817 = state_28411__$1;(statearr_28429_28817[2] = null);
(statearr_28429_28817[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28412 === 12))
{var inst_28371 = (state_28411[7]);var inst_28399 = cljs.core.vec.call(null,inst_28371);var state_28411__$1 = state_28411;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28411__$1,15,out,inst_28399);
} else
{if((state_val_28412 === 13))
{var state_28411__$1 = state_28411;var statearr_28430_28818 = state_28411__$1;(statearr_28430_28818[2] = null);
(statearr_28430_28818[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28412 === 14))
{var inst_28404 = (state_28411[2]);var inst_28405 = cljs.core.async.close_BANG_.call(null,out);var state_28411__$1 = (function (){var statearr_28431 = state_28411;(statearr_28431[14] = inst_28404);
return statearr_28431;
})();var statearr_28432_28819 = state_28411__$1;(statearr_28432_28819[2] = inst_28405);
(statearr_28432_28819[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28412 === 15))
{var inst_28401 = (state_28411[2]);var state_28411__$1 = state_28411;var statearr_28433_28820 = state_28411__$1;(statearr_28433_28820[2] = inst_28401);
(statearr_28433_28820[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22466__auto___28806,out))
;return ((function (switch__22390__auto__,c__22466__auto___28806,out){
return (function() {
var state_machine__22391__auto__ = null;
var state_machine__22391__auto____0 = (function (){var statearr_28437 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28437[0] = state_machine__22391__auto__);
(statearr_28437[1] = 1);
return statearr_28437;
});
var state_machine__22391__auto____1 = (function (state_28411){while(true){
var ret_value__22392__auto__ = (function (){try{while(true){
var result__22393__auto__ = switch__22390__auto__.call(null,state_28411);if(cljs.core.keyword_identical_QMARK_.call(null,result__22393__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22393__auto__;
}
break;
}
}catch (e28438){if((e28438 instanceof Object))
{var ex__22394__auto__ = e28438;var statearr_28439_28821 = state_28411;(statearr_28439_28821[5] = ex__22394__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28411);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28438;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22392__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28822 = state_28411;
state_28411 = G__28822;
continue;
}
} else
{return ret_value__22392__auto__;
}
break;
}
});
state_machine__22391__auto__ = function(state_28411){
switch(arguments.length){
case 0:
return state_machine__22391__auto____0.call(this);
case 1:
return state_machine__22391__auto____1.call(this,state_28411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22391__auto____0;
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22391__auto____1;
return state_machine__22391__auto__;
})()
;})(switch__22390__auto__,c__22466__auto___28806,out))
})();var state__22468__auto__ = (function (){var statearr_28440 = f__22467__auto__.call(null);(statearr_28440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22466__auto___28806);
return statearr_28440;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22468__auto__);
});})(c__22466__auto___28806,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
}
if(!lt.util.load.provided_QMARK_('lt.plugins.example-linter')) {
goog.provide('lt.plugins.example_linter');
goog.require('cljs.core');
goog.require('lt.object');
goog.require('lt.object');
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.example-linter","example-word-linter","lt.plugins.example-linter/example-word-linter",3076569534),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.objs.editor.lint","validate","lt.objs.editor.lint/validate",4434222894)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.example-linter","lint-words-in-editor","lt.plugins.example-linter/lint-words-in-editor",3990699255)], null),new cljs.core.Keyword(null,"linter-name","linter-name",2860858810),"Example word linter");
lt.plugins.example_linter.lint_words = (function lint_words(editor_text,words){var words_to_find = cljs.core.set.call(null,cljs.core.map.call(null,clojure.string.lower_case,words));return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,((function (words_to_find){
return (function (line_no,line){return cljs.core.keep.call(null,((function (words_to_find){
return (function (w){var found_at = clojure.string.lower_case.call(null,line).indexOf(w);if((0 <= found_at))
{return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message","message",1968829305),[cljs.core.str("You can't say the word "),cljs.core.str(w),cljs.core.str("!")].join(''),new cljs.core.Keyword(null,"severity","severity",2492204655),"error",new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line_no,found_at], null),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line_no,(found_at + cljs.core.count.call(null,w))], null)], null);
} else
{return null;
}
});})(words_to_find))
,words_to_find);
});})(words_to_find))
,clojure.string.split.call(null,editor_text,/\n/)));
});
lt.plugins.example_linter.__BEH__lint_words_in_editor = (function __BEH__lint_words_in_editor(obj,editor_text,callback,_){return callback.call(null,lt.plugins.example_linter.lint_words.call(null,editor_text,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1016906831).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)))));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.example-linter","lint-words-in-editor","lt.plugins.example-linter/lint-words-in-editor",3990699255),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.example_linter.__BEH__lint_words_in_editor,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.objs.editor.lint","validate","lt.objs.editor.lint/validate",4434222894),null], null), null));
}
if(!lt.util.load.provided_QMARK_('lt.objs.editor.lint')) {
goog.provide('lt.objs.editor.lint');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.editor');
goog.require('lt.objs.console');
goog.require('cljs.core.async');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.objs.editor.lint","linters","lt.objs.editor.lint/linters",1778761659),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linters","linters",1191258613)], null),new cljs.core.Keyword(null,"by-tag","by-tag",3932762262),cljs.core.PersistentArrayMap.EMPTY);
lt.objs.editor.lint.linters = lt.object.create.call(null,new cljs.core.Keyword("lt.objs.editor.lint","linters","lt.objs.editor.lint/linters",1778761659));
lt.objs.editor.lint.default_timeout = 5000;
lt.objs.editor.lint.verify_linter_result = (function verify_linter_result(obj,res){if((res == null))
{return lt.objs.console.error.call(null,[cljs.core.str("No response received from linter "),cljs.core.str(new cljs.core.Keyword(null,"linter-name","linter-name",2860858810).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)))].join(''));
} else
{if(cljs.core.truth_((function (){var and__19792__auto__ = cljs.core.map_QMARK_.call(null,res);if(and__19792__auto__)
{return new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(res);
} else
{return and__19792__auto__;
}
})()))
{return lt.objs.console.error.call(null,[cljs.core.str("Error received from linter "),cljs.core.str(new cljs.core.Keyword(null,"linter-name","linter-name",2860858810).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)))].join(''),res);
} else
{if((cljs.core.coll_QMARK_.call(null,res)) && (!(cljs.core.map_QMARK_.call(null,res))))
{return res;
} else
{return null;
}
}
}
});
lt.objs.editor.lint.__GT_cm_lint_msg = (function __GT_cm_lint_msg(p__32741){var map__32743 = p__32741;var map__32743__$1 = ((cljs.core.seq_QMARK_.call(null,map__32743))?cljs.core.apply.call(null,cljs.core.hash_map,map__32743):map__32743);var msg = map__32743__$1;var to = cljs.core.get.call(null,map__32743__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from = cljs.core.get.call(null,map__32743__$1,new cljs.core.Keyword(null,"from","from",1017056028));return cljs.core.assoc.call(null,msg,new cljs.core.Keyword(null,"from","from",1017056028),CodeMirror.Pos(cljs.core.first.call(null,from),cljs.core.last.call(null,from)),new cljs.core.Keyword(null,"to","to",1013907949),CodeMirror.Pos(cljs.core.first.call(null,to),cljs.core.last.call(null,to)));
});
lt.objs.editor.lint.is_lint_mark_QMARK_ = (function is_lint_mark_QMARK_(tm){return cljs.core.re_find.call(null,/^CodeMirror-lint-mark-/,tm.className);
});
lt.objs.editor.lint.on_cursor_activity = (function on_cursor_activity(ed){var text_marks = lt.objs.editor.find_marks.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed));var temp__4090__auto__ = cljs.core.seq.call(null,cljs.core.filter.call(null,lt.objs.editor.lint.is_lint_mark_QMARK_,text_marks));if(temp__4090__auto__)
{var lint_marks = temp__4090__auto__;if((1 < cljs.core.count.call(null,lint_marks)))
{return lt.objs.notifos.set_msg_BANG_.call(null,"Multiple lint messages found.");
} else
{var annotation = cljs.core.js__GT_clj.call(null,cljs.core.first.call(null,lint_marks).__annotation,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);return lt.objs.notifos.set_msg_BANG_.call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(annotation),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.Keyword(null,"severity","severity",2492204655).cljs$core$IFn$_invoke$arity$1(annotation)], null));
}
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"");
}
});
/**
* Raise ::validate trigger on all given linter objects asynchronously, then pass all the results
* at once to the codemirror linter callback function
* @param {...*} var_args
*/
lt.objs.editor.lint.validate_with_all_linters = (function() { 
var validate_with_all_linters__delegate = function (ed,linter_objs){return (function (editor_text,callback,options){lt.objs.editor.off.call(null,ed,new cljs.core.Keyword(null,"cursorActivity","cursorActivity",2053482487),cljs.core.partial.call(null,lt.objs.editor.lint.on_cursor_activity,ed));
lt.objs.editor.on.call(null,ed,new cljs.core.Keyword(null,"cursorActivity","cursorActivity",2053482487),cljs.core.partial.call(null,lt.objs.editor.lint.on_cursor_activity,ed));
var validate_chans = cljs.core.map.call(null,(function (obj){var ch = cljs.core.async.timeout.call(null,(function (){var or__19804__auto__ = new cljs.core.Keyword(null,"timeout","timeout",3994960083).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj));if(cljs.core.truth_(or__19804__auto__))
{return or__19804__auto__;
} else
{return lt.objs.editor.lint.default_timeout;
}
})());var callback_fn = ((function (ch){
return (function (results){var c__22466__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22466__auto__,ch){
return (function (){var f__22467__auto__ = (function (){var switch__22390__auto__ = ((function (c__22466__auto__,ch){
return (function (state_32830){var state_val_32831 = (state_32830[1]);if((state_val_32831 === 2))
{var inst_32828 = (state_32830[2]);var state_32830__$1 = state_32830;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32830__$1,inst_32828);
} else
{if((state_val_32831 === 1))
{var state_32830__$1 = state_32830;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32830__$1,2,ch,results);
} else
{return null;
}
}
});})(c__22466__auto__,ch))
;return ((function (switch__22390__auto__,c__22466__auto__,ch){
return (function() {
var state_machine__22391__auto__ = null;
var state_machine__22391__auto____0 = (function (){var statearr_32835 = [null,null,null,null,null,null,null];(statearr_32835[0] = state_machine__22391__auto__);
(statearr_32835[1] = 1);
return statearr_32835;
});
var state_machine__22391__auto____1 = (function (state_32830){while(true){
var ret_value__22392__auto__ = (function (){try{while(true){
var result__22393__auto__ = switch__22390__auto__.call(null,state_32830);if(cljs.core.keyword_identical_QMARK_.call(null,result__22393__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22393__auto__;
}
break;
}
}catch (e32836){if((e32836 instanceof Object))
{var ex__22394__auto__ = e32836;var statearr_32837_32916 = state_32830;(statearr_32837_32916[5] = ex__22394__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32830);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32836;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22392__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32917 = state_32830;
state_32830 = G__32917;
continue;
}
} else
{return ret_value__22392__auto__;
}
break;
}
});
state_machine__22391__auto__ = function(state_32830){
switch(arguments.length){
case 0:
return state_machine__22391__auto____0.call(this);
case 1:
return state_machine__22391__auto____1.call(this,state_32830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22391__auto____0;
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22391__auto____1;
return state_machine__22391__auto__;
})()
;})(switch__22390__auto__,c__22466__auto__,ch))
})();var state__22468__auto__ = (function (){var statearr_32838 = f__22467__auto__.call(null);(statearr_32838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22466__auto__);
return statearr_32838;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22468__auto__);
});})(c__22466__auto__,ch))
);
return c__22466__auto__;
});})(ch))
;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch,callback_fn,obj], null);
}),linter_objs);var seq__32839_32918 = cljs.core.seq.call(null,validate_chans);var chunk__32840_32919 = null;var count__32841_32920 = 0;var i__32842_32921 = 0;while(true){
if((i__32842_32921 < count__32841_32920))
{var vec__32843_32922 = cljs.core._nth.call(null,chunk__32840_32919,i__32842_32921);var __32923 = cljs.core.nth.call(null,vec__32843_32922,0,null);var f_32924 = cljs.core.nth.call(null,vec__32843_32922,1,null);var obj_32925 = cljs.core.nth.call(null,vec__32843_32922,2,null);lt.object.raise.call(null,obj_32925,new cljs.core.Keyword("lt.objs.editor.lint","validate","lt.objs.editor.lint/validate",4434222894),editor_text,f_32924,ed);
{
var G__32926 = seq__32839_32918;
var G__32927 = chunk__32840_32919;
var G__32928 = count__32841_32920;
var G__32929 = (i__32842_32921 + 1);
seq__32839_32918 = G__32926;
chunk__32840_32919 = G__32927;
count__32841_32920 = G__32928;
i__32842_32921 = G__32929;
continue;
}
} else
{var temp__4092__auto___32930 = cljs.core.seq.call(null,seq__32839_32918);if(temp__4092__auto___32930)
{var seq__32839_32931__$1 = temp__4092__auto___32930;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32839_32931__$1))
{var c__20552__auto___32932 = cljs.core.chunk_first.call(null,seq__32839_32931__$1);{
var G__32933 = cljs.core.chunk_rest.call(null,seq__32839_32931__$1);
var G__32934 = c__20552__auto___32932;
var G__32935 = cljs.core.count.call(null,c__20552__auto___32932);
var G__32936 = 0;
seq__32839_32918 = G__32933;
chunk__32840_32919 = G__32934;
count__32841_32920 = G__32935;
i__32842_32921 = G__32936;
continue;
}
} else
{var vec__32844_32937 = cljs.core.first.call(null,seq__32839_32931__$1);var __32938 = cljs.core.nth.call(null,vec__32844_32937,0,null);var f_32939 = cljs.core.nth.call(null,vec__32844_32937,1,null);var obj_32940 = cljs.core.nth.call(null,vec__32844_32937,2,null);lt.object.raise.call(null,obj_32940,new cljs.core.Keyword("lt.objs.editor.lint","validate","lt.objs.editor.lint/validate",4434222894),editor_text,f_32939,ed);
{
var G__32941 = cljs.core.next.call(null,seq__32839_32931__$1);
var G__32942 = null;
var G__32943 = 0;
var G__32944 = 0;
seq__32839_32918 = G__32941;
chunk__32840_32919 = G__32942;
count__32841_32920 = G__32943;
i__32842_32921 = G__32944;
continue;
}
}
} else
{}
}
break;
}
var c__22466__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22466__auto__,validate_chans){
return (function (){var f__22467__auto__ = (function (){var switch__22390__auto__ = ((function (c__22466__auto__,validate_chans){
return (function (state_32886){var state_val_32887 = (state_32886[1]);if((state_val_32887 === 1))
{var inst_32850 = cljs.core.nth.call(null,validate_chans,0,null);var inst_32851 = cljs.core.nth.call(null,inst_32850,0,null);var inst_32852 = cljs.core.nth.call(null,inst_32850,1,null);var inst_32853 = cljs.core.nth.call(null,inst_32850,2,null);var inst_32854 = cljs.core.nthnext.call(null,validate_chans,1);var inst_32855 = validate_chans;var inst_32856 = cljs.core.PersistentVector.EMPTY;var state_32886__$1 = (function (){var statearr_32888 = state_32886;(statearr_32888[7] = inst_32851);
(statearr_32888[8] = inst_32852);
(statearr_32888[9] = inst_32853);
(statearr_32888[10] = inst_32854);
(statearr_32888[11] = inst_32856);
(statearr_32888[12] = inst_32855);
return statearr_32888;
})();var statearr_32889_32945 = state_32886__$1;(statearr_32889_32945[2] = null);
(statearr_32889_32945[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32887 === 2))
{var inst_32855 = (state_32886[12]);var inst_32860 = cljs.core.nth.call(null,inst_32855,0,null);var inst_32861 = cljs.core.nth.call(null,inst_32860,0,null);var inst_32862 = cljs.core.nth.call(null,inst_32860,1,null);var inst_32863 = cljs.core.nth.call(null,inst_32860,2,null);var inst_32864 = cljs.core.nthnext.call(null,inst_32855,1);var state_32886__$1 = (function (){var statearr_32890 = state_32886;(statearr_32890[13] = inst_32862);
(statearr_32890[14] = inst_32863);
(statearr_32890[15] = inst_32864);
return statearr_32890;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32886__$1,4,inst_32861);
} else
{if((state_val_32887 === 3))
{var inst_32884 = (state_32886[2]);var state_32886__$1 = state_32886;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32886__$1,inst_32884);
} else
{if((state_val_32887 === 4))
{var inst_32863 = (state_32886[14]);var inst_32867 = (state_32886[16]);var inst_32866 = (state_32886[2]);var inst_32867__$1 = lt.objs.editor.lint.verify_linter_result.call(null,inst_32863,inst_32866);var state_32886__$1 = (function (){var statearr_32891 = state_32886;(statearr_32891[16] = inst_32867__$1);
return statearr_32891;
})();if(cljs.core.truth_(inst_32867__$1))
{var statearr_32892_32946 = state_32886__$1;(statearr_32892_32946[1] = 5);
} else
{var statearr_32893_32947 = state_32886__$1;(statearr_32893_32947[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32887 === 5))
{var inst_32856 = (state_32886[11]);var inst_32867 = (state_32886[16]);var inst_32869 = cljs.core.conj.call(null,inst_32856,inst_32867);var state_32886__$1 = state_32886;var statearr_32894_32948 = state_32886__$1;(statearr_32894_32948[2] = inst_32869);
(statearr_32894_32948[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32887 === 6))
{var inst_32856 = (state_32886[11]);var state_32886__$1 = state_32886;var statearr_32895_32949 = state_32886__$1;(statearr_32895_32949[2] = inst_32856);
(statearr_32895_32949[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32887 === 7))
{var inst_32864 = (state_32886[15]);var inst_32872 = (state_32886[2]);var inst_32873 = cljs.core.seq.call(null,inst_32864);var state_32886__$1 = (function (){var statearr_32896 = state_32886;(statearr_32896[17] = inst_32872);
return statearr_32896;
})();if(inst_32873)
{var statearr_32897_32950 = state_32886__$1;(statearr_32897_32950[1] = 8);
} else
{var statearr_32898_32951 = state_32886__$1;(statearr_32898_32951[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32887 === 8))
{var inst_32872 = (state_32886[17]);var inst_32864 = (state_32886[15]);var inst_32855 = inst_32864;var inst_32856 = inst_32872;var state_32886__$1 = (function (){var statearr_32899 = state_32886;(statearr_32899[11] = inst_32856);
(statearr_32899[12] = inst_32855);
return statearr_32899;
})();var statearr_32900_32952 = state_32886__$1;(statearr_32900_32952[2] = null);
(statearr_32900_32952[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32887 === 9))
{var inst_32872 = (state_32886[17]);var inst_32877 = cljs.core.apply.call(null,cljs.core.concat,inst_32872);var inst_32878 = cljs.core.map.call(null,lt.objs.editor.lint.__GT_cm_lint_msg,inst_32877);var inst_32879 = cljs.core.clj__GT_js.call(null,inst_32878);var inst_32880 = callback.call(null,inst_32879);var state_32886__$1 = state_32886;var statearr_32901_32953 = state_32886__$1;(statearr_32901_32953[2] = inst_32880);
(statearr_32901_32953[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32887 === 10))
{var inst_32882 = (state_32886[2]);var state_32886__$1 = state_32886;var statearr_32902_32954 = state_32886__$1;(statearr_32902_32954[2] = inst_32882);
(statearr_32902_32954[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});})(c__22466__auto__,validate_chans))
;return ((function (switch__22390__auto__,c__22466__auto__,validate_chans){
return (function() {
var state_machine__22391__auto__ = null;
var state_machine__22391__auto____0 = (function (){var statearr_32906 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32906[0] = state_machine__22391__auto__);
(statearr_32906[1] = 1);
return statearr_32906;
});
var state_machine__22391__auto____1 = (function (state_32886){while(true){
var ret_value__22392__auto__ = (function (){try{while(true){
var result__22393__auto__ = switch__22390__auto__.call(null,state_32886);if(cljs.core.keyword_identical_QMARK_.call(null,result__22393__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22393__auto__;
}
break;
}
}catch (e32907){if((e32907 instanceof Object))
{var ex__22394__auto__ = e32907;var statearr_32908_32955 = state_32886;(statearr_32908_32955[5] = ex__22394__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32886);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32907;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22392__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32956 = state_32886;
state_32886 = G__32956;
continue;
}
} else
{return ret_value__22392__auto__;
}
break;
}
});
state_machine__22391__auto__ = function(state_32886){
switch(arguments.length){
case 0:
return state_machine__22391__auto____0.call(this);
case 1:
return state_machine__22391__auto____1.call(this,state_32886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22391__auto____0;
state_machine__22391__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22391__auto____1;
return state_machine__22391__auto__;
})()
;})(switch__22390__auto__,c__22466__auto__,validate_chans))
})();var state__22468__auto__ = (function (){var statearr_32909 = f__22467__auto__.call(null);(statearr_32909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22466__auto__);
return statearr_32909;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22468__auto__);
});})(c__22466__auto__,validate_chans))
);
return c__22466__auto__;
});
};
var validate_with_all_linters = function (ed,var_args){
var linter_objs = null;if (arguments.length > 1) {
  linter_objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return validate_with_all_linters__delegate.call(this,ed,linter_objs);};
validate_with_all_linters.cljs$lang$maxFixedArity = 1;
validate_with_all_linters.cljs$lang$applyTo = (function (arglist__32957){
var ed = cljs.core.first(arglist__32957);
var linter_objs = cljs.core.rest(arglist__32957);
return validate_with_all_linters__delegate(ed,linter_objs);
});
validate_with_all_linters.cljs$core$IFn$_invoke$arity$variadic = validate_with_all_linters__delegate;
return validate_with_all_linters;
})()
;
lt.objs.editor.lint.add_linter = (function add_linter(linters,linter_obj,args){var obj = cljs.core.apply.call(null,lt.object.create,linter_obj,args);return cljs.core.conj.call(null,cljs.core.remove.call(null,((function (obj){
return (function (p1__32910_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword("lt.object","type","lt.object/type",701613666).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__32910_SHARP_)),linter_obj);
});})(obj))
,linters),obj);
});
lt.objs.editor.lint.set_cm_lint_settings_BANG_ = (function set_cm_lint_settings_BANG_(ed){var map__32912 = new cljs.core.Keyword("lt.objs.editor.lint","settings","lt.objs.editor.lint/settings",1326887451).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var map__32912__$1 = ((cljs.core.seq_QMARK_.call(null,map__32912))?cljs.core.apply.call(null,cljs.core.hash_map,map__32912):map__32912);var change_timeout = cljs.core.get.call(null,map__32912__$1,new cljs.core.Keyword(null,"change-timeout","change-timeout",4761814966),500);var auto_QMARK_ = cljs.core.get.call(null,map__32912__$1,new cljs.core.Keyword(null,"auto?","auto?",1107086306),true);var fn = cljs.core.get.call(null,map__32912__$1,new cljs.core.Keyword(null,"fn","fn",1013907514));var lint_QMARK_ = cljs.core.get.call(null,map__32912__$1,new cljs.core.Keyword(null,"lint?","lint?",1116881934));return lt.objs.editor.set_options.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lint","lint",1017226101),(cljs.core.truth_(lint_QMARK_)?{"delay": change_timeout, "lintOnChange": auto_QMARK_, "getAnnotations": fn, "async": true}:null),new cljs.core.Keyword(null,"fixedGutter","fixedGutter",1733738785),false], null));
});
lt.objs.editor.lint.prepare_editor_for_linter = (function prepare_editor_for_linter(ed,p__32913){var vec__32915 = p__32913;var linter_obj = cljs.core.nth.call(null,vec__32915,0,null);var args = cljs.core.nthnext.call(null,vec__32915,1);lt.objs.editor.add_gutter.call(null,ed,"CodeMirror-lint-markers",10);
var ed_tag = cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword(null,"tags","tags",1017456523)], null)));var new_linters = lt.object.merge_BANG_.call(null,lt.objs.editor.lint.linters,cljs.core.update_in.call(null,cljs.core.deref.call(null,lt.objs.editor.lint.linters),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"by-tag","by-tag",3932762262),ed_tag], null),lt.objs.editor.lint.add_linter,linter_obj,args));var validator_fn = cljs.core.apply.call(null,lt.objs.editor.lint.validate_with_all_linters,ed,cljs.core.get_in.call(null,new_linters,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"by-tag","by-tag",3932762262),ed_tag], null)));lt.object.merge_BANG_.call(null,ed,cljs.core.update_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword("lt.objs.editor.lint","settings","lt.objs.editor.lint/settings",1326887451)], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lint?","lint?",1116881934),true,new cljs.core.Keyword(null,"fn","fn",1013907514),validator_fn], null)));
lt.objs.editor.lint.set_cm_lint_settings_BANG_.call(null,ed);
return new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.editor.lint","register-linter","lt.objs.editor.lint/register-linter",4391870434),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.editor.lint.prepare_editor_for_linter,new cljs.core.Keyword(null,"desc","desc",1016984067),"Editor: Register linter",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"linter",new cljs.core.Keyword(null,"example","example",3985900764),"[:lt.plugins.some-linter/linter-object :opt-arg1 val1 :opt-arg2 val2 ...]"], null)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));
lt.objs.editor.lint.__BEH__auto_linting_properties = (function __BEH__auto_linting_properties(ed,enabled_QMARK_,change_timeout){lt.object.merge_BANG_.call(null,ed,cljs.core.update_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword("lt.objs.editor.lint","settings","lt.objs.editor.lint/settings",1326887451)], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"auto?","auto?",1107086306),enabled_QMARK_,new cljs.core.Keyword(null,"change-timeout","change-timeout",4761814966),change_timeout], null)));
return lt.objs.editor.lint.set_cm_lint_settings_BANG_.call(null,ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.editor.lint","auto-linting-properties","lt.objs.editor.lint/auto-linting-properties",3156951719),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.editor.lint.__BEH__auto_linting_properties,new cljs.core.Keyword(null,"desc","desc",1016984067),"Editor: Auto linting settings",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"enabled?",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"boolean","boolean",1078615962)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"change timeout",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"number","number",4274507451)], null)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.objs.editor.lint","run-linters!","lt.objs.editor.lint/run-linters!",2862606664),new cljs.core.Keyword(null,"desc","desc",1016984067),"Editor: run linters for current editor",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var ed = lt.objs.editor.pool.last_active.call(null);return lt.objs.editor.__GT_cm_ed.call(null,ed).performLint();
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.lt-lint')) {
goog.provide('lt.plugins.lt_lint');
goog.require('cljs.core');
goog.require('lt.plugins.example_linter');
goog.require('lt.objs.editor.lint');
}

//# sourceMappingURL=lt-lint_compiled.js.map