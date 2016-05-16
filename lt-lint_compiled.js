if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.protocols')) {
goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = 1024;
cljs.core.async.impl.protocols.ReadPort = (function (){var obj28941 = {};return obj28941;
})();
cljs.core.async.impl.protocols.take_BANG_ = (function take_BANG_(port,fn1_handler){if((function (){var and__19791__auto__ = port;if(and__19791__auto__)
{return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(port,fn1_handler);
} else
{var x__20430__auto__ = (((port == null))?null:port);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.take_BANG_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.take_BANG_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ReadPort.take!",port);
}
}
})().call(null,port,fn1_handler);
}
});
cljs.core.async.impl.protocols.WritePort = (function (){var obj28943 = {};return obj28943;
})();
cljs.core.async.impl.protocols.put_BANG_ = (function put_BANG_(port,val,fn1_handler){if((function (){var and__19791__auto__ = port;if(and__19791__auto__)
{return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3;
} else
{return and__19791__auto__;
}
})())
{return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(port,val,fn1_handler);
} else
{var x__20430__auto__ = (((port == null))?null:port);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.put_BANG_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.put_BANG_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"WritePort.put!",port);
}
}
})().call(null,port,val,fn1_handler);
}
});
cljs.core.async.impl.protocols.Channel = (function (){var obj28945 = {};return obj28945;
})();
cljs.core.async.impl.protocols.close_BANG_ = (function close_BANG_(chan){if((function (){var and__19791__auto__ = chan;if(and__19791__auto__)
{return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(chan);
} else
{var x__20430__auto__ = (((chan == null))?null:chan);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.close_BANG_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.close_BANG_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Channel.close!",chan);
}
}
})().call(null,chan);
}
});
cljs.core.async.impl.protocols.closed_QMARK_ = (function closed_QMARK_(chan){if((function (){var and__19791__auto__ = chan;if(and__19791__auto__)
{return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1(chan);
} else
{var x__20430__auto__ = (((chan == null))?null:chan);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.closed_QMARK_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.closed_QMARK_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Channel.closed?",chan);
}
}
})().call(null,chan);
}
});
cljs.core.async.impl.protocols.Handler = (function (){var obj28947 = {};return obj28947;
})();
cljs.core.async.impl.protocols.active_QMARK_ = (function active_QMARK_(h){if((function (){var and__19791__auto__ = h;if(and__19791__auto__)
{return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(h);
} else
{var x__20430__auto__ = (((h == null))?null:h);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.active_QMARK_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.active_QMARK_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Handler.active?",h);
}
}
})().call(null,h);
}
});
cljs.core.async.impl.protocols.commit = (function commit(h){if((function (){var and__19791__auto__ = h;if(and__19791__auto__)
{return h.cljs$core$async$impl$protocols$Handler$commit$arity$1;
} else
{return and__19791__auto__;
}
})())
{return h.cljs$core$async$impl$protocols$Handler$commit$arity$1(h);
} else
{var x__20430__auto__ = (((h == null))?null:h);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.commit[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.commit["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Handler.commit",h);
}
}
})().call(null,h);
}
});
cljs.core.async.impl.protocols.Buffer = (function (){var obj28949 = {};return obj28949;
})();
cljs.core.async.impl.protocols.full_QMARK_ = (function full_QMARK_(b){if((function (){var and__19791__auto__ = b;if(and__19791__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(b);
} else
{var x__20430__auto__ = (((b == null))?null:b);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.full_QMARK_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.full_QMARK_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Buffer.full?",b);
}
}
})().call(null,b);
}
});
cljs.core.async.impl.protocols.remove_BANG_ = (function remove_BANG_(b){if((function (){var and__19791__auto__ = b;if(and__19791__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(b);
} else
{var x__20430__auto__ = (((b == null))?null:b);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.remove_BANG_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.remove_BANG_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Buffer.remove!",b);
}
}
})().call(null,b);
}
});
cljs.core.async.impl.protocols.add_BANG__STAR_ = (function add_BANG__STAR_(b,itm){if((function (){var and__19791__auto__ = b;if(and__19791__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2(b,itm);
} else
{var x__20430__auto__ = (((b == null))?null:b);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.add_BANG__STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.add_BANG__STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
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
cljs.core.async.impl.protocols.UnblockingBuffer = (function (){var obj28951 = {};return obj28951;
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
var G__28887 = (cnt + 1);
cnt = G__28887;
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
cljs.core.async.impl.buffers.RingBuffer.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.buffers/RingBuffer");
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
var this$ = this;var n__20651__auto__ = self__.length;var x = 0;while(true){
if((x < n__20651__auto__))
{var v_28888 = this$.pop();if(keep_QMARK_.call(null,v_28888))
{this$.unshift(v_28888);
} else
{}
{
var G__28889 = (x + 1);
x = G__28889;
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
cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.buffers/FixedBuffer");
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
cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.buffers/DroppingBuffer");
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
cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.buffers/SlidingBuffer");
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
var count_28937 = 0;while(true){
var m_28938 = cljs.core.async.impl.dispatch.tasks.pop();if((m_28938 == null))
{} else
{m_28938.call(null);
if((count_28937 < cljs.core.async.impl.dispatch.TASK_BATCH_SIZE))
{{
var G__28939 = (count_28937 + 1);
count_28937 = G__28939;
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
cljs.core.async.impl.dispatch.queue_dispatcher = (function queue_dispatcher(){if(cljs.core.truth_((function (){var and__19791__auto__ = cljs.core.async.impl.dispatch.queued_QMARK_;if(and__19791__auto__)
{return cljs.core.async.impl.dispatch.running_QMARK_;
} else
{return and__19791__auto__;
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
cljs.core.async.impl.channels.box = (function box(val){if(typeof cljs.core.async.impl.channels.t28893 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.channels.t28893 = (function (val,box,meta28894){
this.val = val;
this.box = box;
this.meta28894 = meta28894;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
cljs.core.async.impl.channels.t28893.cljs$lang$type = true;
cljs.core.async.impl.channels.t28893.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t28893";
cljs.core.async.impl.channels.t28893.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.channels/t28893");
});
cljs.core.async.impl.channels.t28893.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.val;
});
cljs.core.async.impl.channels.t28893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28895){var self__ = this;
var _28895__$1 = this;return self__.meta28894;
});
cljs.core.async.impl.channels.t28893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28895,meta28894__$1){var self__ = this;
var _28895__$1 = this;return (new cljs.core.async.impl.channels.t28893(self__.val,self__.box,meta28894__$1));
});
cljs.core.async.impl.channels.__GT_t28893 = (function __GT_t28893(val__$1,box__$1,meta28894){return (new cljs.core.async.impl.channels.t28893(val__$1,box__$1,meta28894));
});
}
return (new cljs.core.async.impl.channels.t28893(val,box,null));
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
cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__20373__auto__,writer__20374__auto__,opts__20375__auto__){return cljs.core._write.call(null,writer__20374__auto__,"cljs.core.async.impl.channels/PutBox");
});
cljs.core.async.impl.channels.__GT_PutBox = (function __GT_PutBox(handler,val){return (new cljs.core.async.impl.channels.PutBox(handler,val));
});
cljs.core.async.impl.channels.put_active_QMARK_ = (function put_active_QMARK_(box){return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = 64;
cljs.core.async.impl.channels.MMC = (function (){var obj28897 = {};return obj28897;
})();
cljs.core.async.impl.channels.abort = (function abort(this$){if((function (){var and__19791__auto__ = this$;if(and__19791__auto__)
{return this$.cljs$core$async$impl$channels$MMC$abort$arity$1;
} else
{return and__19791__auto__;
}
})())
{return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else
{var x__20430__auto__ = (((this$ == null))?null:this$);return (function (){var or__19803__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
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
cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
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
if(cljs.core.truth_((function (){var and__19791__auto__ = self__.buf;if(cljs.core.truth_(and__19791__auto__))
{return (self__.puts.length === 0);
} else
{return and__19791__auto__;
}
})()))
{self__.add_BANG_.call(null,self__.buf);
} else
{}
while(true){
var taker_28912 = self__.takes.pop();if((taker_28912 == null))
{} else
{if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_28912))
{var take_cb_28913 = cljs.core.async.impl.protocols.commit.call(null,taker_28912);var val_28914 = (cljs.core.truth_((function (){var and__19791__auto__ = self__.buf;if(cljs.core.truth_(and__19791__auto__))
{return (cljs.core.count.call(null,self__.buf) > 0);
} else
{return and__19791__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_28913,val_28914,taker_28912,this$__$1){
return (function (){return take_cb_28913.call(null,val_28914);
});})(take_cb_28913,val_28914,taker_28912,this$__$1))
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
{var putter_28915 = self__.puts.pop();if((putter_28915 == null))
{} else
{var put_handler_28916 = putter_28915.handler;var val_28917 = putter_28915.val;if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_28916))
{var put_cb_28918 = cljs.core.async.impl.protocols.commit.call(null,put_handler_28916);cljs.core.async.impl.protocols.commit.call(null,handler);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_28918,put_handler_28916,val_28917,putter_28915,_,retval,this$__$1){
return (function (){return put_cb_28918.call(null,true);
});})(put_cb_28918,put_handler_28916,val_28917,putter_28915,_,retval,this$__$1))
);
if(cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val_28917)))
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
if(cljs.core.truth_((function (){var and__19791__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);if(cljs.core.truth_(and__19791__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,handler);
} else
{return and__19791__auto__;
}
})()))
{var has_val = (function (){var and__19791__auto__ = self__.buf;if(cljs.core.truth_(and__19791__auto__))
{return (cljs.core.count.call(null,self__.buf) > 0);
} else
{return and__19791__auto__;
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
{if(cljs.core.truth_((function (){var and__19791__auto__ = self__.buf;if(cljs.core.truth_(and__19791__auto__))
{return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else
{return and__19791__auto__;
}
})()))
{cljs.core.async.impl.protocols.commit.call(null,handler);
var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));while(true){
if(((self__.takes.length > 0)) && ((cljs.core.count.call(null,self__.buf) > 0)))
{var taker_28919 = self__.takes.pop();if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_28919))
{var take_cb_28920 = cljs.core.async.impl.protocols.commit.call(null,taker_28919);var val_28921__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_28920,val_28921__$1,taker_28919,done_QMARK_,closed__$1,this$__$1){
return (function (){return take_cb_28920.call(null,val_28921__$1);
});})(take_cb_28920,val_28921__$1,taker_28919,done_QMARK_,closed__$1,this$__$1))
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
var putter_28922 = self__.puts.pop();if((putter_28922 == null))
{} else
{var put_handler_28923 = putter_28922.handler;var val_28924 = putter_28922.val;if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_28923))
{var put_cb_28925 = cljs.core.async.impl.protocols.commit.call(null,put_handler_28923);cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_28925,put_handler_28923,val_28924,putter_28922,this$__$1){
return (function (){return put_cb_28925.call(null,true);
});})(put_cb_28925,put_handler_28923,val_28924,putter_28922,this$__$1))
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
cljs.core.async.impl.channels.handle = (function handle(buf,exh,t){var else$ = (function (){var or__19803__auto__ = exh;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
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
var G__28926 = null;
var G__28926__1 = (function (buf__$1){try{return add_BANG_.call(null,buf__$1);
}catch (e28900){var t = e28900;return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__28926__2 = (function (buf__$1,val){try{return add_BANG_.call(null,buf__$1,val);
}catch (e28901){var t = e28901;return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__28926 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__28926__1.call(this,buf__$1);
case 2:
return G__28926__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__28926;
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
var G__28972 = (level + 1);
level = G__28972;
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
cljs.core.async.impl.timers.SkipListNode.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.timers/SkipListNode");
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
var skip_list_node__3 = (function (k,v,level){var arr = (new Array((level + 1)));var i_28973 = 0;while(true){
if((i_28973 < arr.length))
{(arr[i_28973] = null);
{
var G__28974 = (i_28973 + 1);
i_28973 = G__28974;
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
var G__28975 = x_SINGLEQUOTE_;
x__$1 = G__28975;
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
var G__28976 = x__$1;
var G__28977 = k;
var G__28978 = (level - 1);
var G__28979 = update;
x = G__28976;
k = G__28977;
level = G__28978;
update = G__28979;
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
cljs.core.async.impl.timers.SkipList.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.timers/SkipList");
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
{var i_28980 = (self__.level + 1);while(true){
if((i_28980 <= (new_level + 1)))
{(update[i_28980] = self__.header);
{
var G__28981 = (i_28980 + 1);
i_28980 = G__28981;
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
{var i_28982 = 0;while(true){
if((i_28982 <= self__.level))
{var links_28983 = (update[i_28982]).forward;if(((links_28983[i_28982]) === x__$1))
{(links_28983[i_28982] = (x__$1.forward[i_28982]));
{
var G__28984 = (i_28982 + 1);
i_28982 = G__28984;
continue;
}
} else
{{
var G__28985 = (i_28982 + 1);
i_28982 = G__28985;
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
var G__28986 = x_SINGLEQUOTE_;
x__$1 = G__28986;
continue;
}
}
}
break;
}
})();if(!((nx == null)))
{{
var G__28987 = nx;
var G__28988 = (level__$1 - 1);
x = G__28987;
level__$1 = G__28988;
continue;
}
} else
{{
var G__28989 = x;
var G__28990 = (level__$1 - 1);
x = G__28989;
level__$1 = G__28990;
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
var G__28991 = x_SINGLEQUOTE_;
x__$1 = G__28991;
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
var G__28992 = nx;
var G__28993 = (level__$1 - 1);
x = G__28992;
level__$1 = G__28993;
continue;
}
} else
{{
var G__28994 = x;
var G__28995 = (level__$1 - 1);
x = G__28994;
level__$1 = G__28995;
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
cljs.core.async.impl.timers.timeout = (function timeout(msecs){var timeout__$1 = ((new Date()).valueOf() + msecs);var me = cljs.core.async.impl.timers.timeouts_map.ceilingEntry(timeout__$1);var or__19803__auto__ = (cljs.core.truth_((function (){var and__19791__auto__ = me;if(cljs.core.truth_(and__19791__auto__))
{return (me.key < (timeout__$1 + cljs.core.async.impl.timers.TIMEOUT_RESOLUTION_MS));
} else
{return and__19791__auto__;
}
})())?me.val:null);if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{var timeout_channel = cljs.core.async.impl.channels.chan.call(null,null);cljs.core.async.impl.timers.timeouts_map.put(timeout__$1,timeout_channel);
cljs.core.async.impl.dispatch.queue_delay.call(null,((function (timeout_channel,or__19803__auto__,timeout__$1,me){
return (function (){cljs.core.async.impl.timers.timeouts_map.remove(timeout__$1);
return cljs.core.async.impl.protocols.close_BANG_.call(null,timeout_channel);
});})(timeout_channel,or__19803__auto__,timeout__$1,me))
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
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t28817 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t28817 = (function (f,fn_handler,meta28818){
this.f = f;
this.fn_handler = fn_handler;
this.meta28818 = meta28818;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t28817.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t28817.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t28817";
cljs.core.async.impl.ioc_helpers.t28817.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.ioc-helpers/t28817");
});
cljs.core.async.impl.ioc_helpers.t28817.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t28817.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t28817.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t28817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28819){var self__ = this;
var _28819__$1 = this;return self__.meta28818;
});
cljs.core.async.impl.ioc_helpers.t28817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28819,meta28818__$1){var self__ = this;
var _28819__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t28817(self__.f,self__.fn_handler,meta28818__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t28817 = (function __GT_t28817(f__$1,fn_handler__$1,meta28818){return (new cljs.core.async.impl.ioc_helpers.t28817(f__$1,fn_handler__$1,meta28818));
});
}
return (new cljs.core.async.impl.ioc_helpers.t28817(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e28821){if((e28821 instanceof Object))
{var ex = e28821;cljs.core.async.impl.protocols.close_BANG_.call(null,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.USER_START_IDX));
throw ex;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28821;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4090__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){var statearr_28824_28867 = state;(statearr_28824_28867[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_28824_28867[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_28825_28868 = state;(statearr_28825_28868[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_28825_28868[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (ret_val){var statearr_28828_28869 = state;(statearr_28828_28869[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);
(statearr_28828_28869[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_28829_28870 = state;(statearr_28829_28870[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_28829_28870[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__28830){var map__28835 = p__28830;var map__28835__$1 = ((cljs.core.seq_QMARK_.call(null,map__28835))?cljs.core.apply.call(null,cljs.core.hash_map,map__28835):map__28835);var opts = map__28835__$1;var statearr_28836_28871 = state;(statearr_28836_28871[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts.call(null,((function (map__28835,map__28835__$1,opts){
return (function (val){var statearr_28837_28872 = state;(statearr_28837_28872[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28835,map__28835__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;var statearr_28838_28873 = state;(statearr_28838_28873[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__28830 = null;if (arguments.length > 3) {
  p__28830 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__28830);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__28874){
var state = cljs.core.first(arglist__28874);
arglist__28874 = cljs.core.next(arglist__28874);
var cont_block = cljs.core.first(arglist__28874);
arglist__28874 = cljs.core.next(arglist__28874);
var ports = cljs.core.first(arglist__28874);
var p__28830 = cljs.core.rest(arglist__28874);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__28830);
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20384__auto__){var self__ = this;
var this__20384__auto____$1 = this;var h__20214__auto__ = self__.__hash;if(!((h__20214__auto__ == null)))
{return h__20214__auto__;
} else
{var h__20214__auto____$1 = cljs.core.hash_imap.call(null,this__20384__auto____$1);self__.__hash = h__20214__auto____$1;
return h__20214__auto____$1;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20389__auto__,k__20390__auto__){var self__ = this;
var this__20389__auto____$1 = this;return cljs.core._lookup.call(null,this__20389__auto____$1,k__20390__auto__,null);
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20391__auto__,k28840,else__20392__auto__){var self__ = this;
var this__20391__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k28840,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893)))
{return self__.catch_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k28840,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687)))
{return self__.catch_exception;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k28840,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429)))
{return self__.finally_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k28840,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097)))
{return self__.continue_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k28840,new cljs.core.Keyword(null,"prev","prev",1017353637)))
{return self__.prev;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k28840,else__20392__auto__);
} else
{return null;
}
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20396__auto__,k__20397__auto__,G__28839){var self__ = this;
var this__20396__auto____$1 = this;var pred__28842 = cljs.core.keyword_identical_QMARK_;var expr__28843 = k__20397__auto__;if(cljs.core.truth_(pred__28842.call(null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),expr__28843)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__28839,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__28842.call(null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),expr__28843)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__28839,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__28842.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),expr__28843)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__28839,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__28842.call(null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),expr__28843)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__28839,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__28842.call(null,new cljs.core.Keyword(null,"prev","prev",1017353637),expr__28843)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__28839,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20397__auto__,G__28839),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20403__auto__,writer__20404__auto__,opts__20405__auto__){var self__ = this;
var this__20403__auto____$1 = this;var pr_pair__20406__auto__ = ((function (this__20403__auto____$1){
return (function (keyval__20407__auto__){return cljs.core.pr_sequential_writer.call(null,writer__20404__auto__,cljs.core.pr_writer,""," ","",opts__20405__auto__,keyval__20407__auto__);
});})(this__20403__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__20404__auto__,pr_pair__20406__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__20405__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",1017353637),self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20394__auto__,entry__20395__auto__){var self__ = this;
var this__20394__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__20395__auto__))
{return cljs.core._assoc.call(null,this__20394__auto____$1,cljs.core._nth.call(null,entry__20395__auto__,0),cljs.core._nth.call(null,entry__20395__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__20394__auto____$1,entry__20395__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20401__auto__){var self__ = this;
var this__20401__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",1017353637),self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20393__auto__){var self__ = this;
var this__20393__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20385__auto__,other__20386__auto__){var self__ = this;
var this__20385__auto____$1 = this;if(cljs.core.truth_((function (){var and__19791__auto__ = other__20386__auto__;if(cljs.core.truth_(and__19791__auto__))
{return ((this__20385__auto____$1.constructor === other__20386__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__20385__auto____$1,other__20386__auto__));
} else
{return and__19791__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20388__auto__,G__28839){var self__ = this;
var this__20388__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__28839,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20383__auto__){var self__ = this;
var this__20383__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20387__auto__){var self__ = this;
var this__20387__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20398__auto__,k__20399__auto__){var self__ = this;
var this__20398__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),null,new cljs.core.Keyword(null,"prev","prev",1017353637),null], null), null),k__20399__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20398__auto____$1),self__.__meta),k__20399__auto__);
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20399__auto__)),null));
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__20423__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__20423__auto__,writer__20424__auto__){return cljs.core._write.call(null,writer__20424__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev));
});
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__28841){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(G__28841),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(G__28841),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(G__28841),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(G__28841),new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(G__28841),null,cljs.core.dissoc.call(null,G__28841,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),new cljs.core.Keyword(null,"prev","prev",1017353637))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_28846 = state;(statearr_28846[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame.call(null,catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_28846;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__19791__auto__ = exception;if(cljs.core.truth_(and__19791__auto__))
{return cljs.core.not.call(null,exception_frame);
} else
{return and__19791__auto__;
}
})()))
{throw exception;
} else
{if(cljs.core.truth_((function (){var and__19791__auto__ = exception;if(cljs.core.truth_(and__19791__auto__))
{var and__19791__auto____$1 = catch_block;if(cljs.core.truth_(and__19791__auto____$1))
{return (exception instanceof catch_exception);
} else
{return and__19791__auto____$1;
}
} else
{return and__19791__auto__;
}
})()))
{var statearr_28852 = state;(statearr_28852[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_28852[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_28852[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_28852[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null));
return statearr_28852;
} else
{if(cljs.core.truth_((function (){var and__19791__auto__ = exception;if(cljs.core.truth_(and__19791__auto__))
{return (cljs.core.not.call(null,catch_block)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__19791__auto__;
}
})()))
{var statearr_28853_28875 = state;(statearr_28853_28875[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__28876 = state;
state = G__28876;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__19791__auto__ = exception;if(cljs.core.truth_(and__19791__auto__))
{var and__19791__auto____$1 = cljs.core.not.call(null,catch_block);if(and__19791__auto____$1)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__19791__auto____$1;
}
} else
{return and__19791__auto__;
}
})()))
{var statearr_28854 = state;(statearr_28854[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_28854[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_28854;
} else
{if(cljs.core.truth_((function (){var and__19791__auto__ = cljs.core.not.call(null,exception);if(and__19791__auto__)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__19791__auto__;
}
})()))
{var statearr_28855 = state;(statearr_28855[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_28855[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_28855;
} else
{if((cljs.core.not.call(null,exception)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_28856 = state;(statearr_28856[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_28856[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_28856;
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t25735 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25735 = (function (f,fn_handler,meta25736){
this.f = f;
this.fn_handler = fn_handler;
this.meta25736 = meta25736;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25735.cljs$lang$type = true;
cljs.core.async.t25735.cljs$lang$ctorStr = "cljs.core.async/t25735";
cljs.core.async.t25735.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t25735");
});
cljs.core.async.t25735.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25735.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t25735.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t25735.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25737){var self__ = this;
var _25737__$1 = this;return self__.meta25736;
});
cljs.core.async.t25735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25737,meta25736__$1){var self__ = this;
var _25737__$1 = this;return (new cljs.core.async.t25735(self__.f,self__.fn_handler,meta25736__$1));
});
cljs.core.async.__GT_t25735 = (function __GT_t25735(f__$1,fn_handler__$1,meta25736){return (new cljs.core.async.t25735(f__$1,fn_handler__$1,meta25736));
});
}
return (new cljs.core.async.t25735(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__25739 = buff;if(G__25739)
{var bit__20453__auto__ = null;if(cljs.core.truth_((function (){var or__19803__auto__ = bit__20453__auto__;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return G__25739.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__25739.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25739);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25739);
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
{var val_28442 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_28442);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_28442,ret){
return (function (){return fn1.call(null,val_28442);
});})(val_28442,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__20651__auto___28443 = n;var x_28444 = 0;while(true){
if((x_28444 < n__20651__auto___28443))
{(a[x_28444] = 0);
{
var G__28445 = (x_28444 + 1);
x_28444 = G__28445;
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
var G__28446 = (i + 1);
i = G__28446;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t25743 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25743 = (function (flag,alt_flag,meta25744){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta25744 = meta25744;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25743.cljs$lang$type = true;
cljs.core.async.t25743.cljs$lang$ctorStr = "cljs.core.async/t25743";
cljs.core.async.t25743.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t25743");
});})(flag))
;
cljs.core.async.t25743.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25743.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t25743.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t25743.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25745){var self__ = this;
var _25745__$1 = this;return self__.meta25744;
});})(flag))
;
cljs.core.async.t25743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25745,meta25744__$1){var self__ = this;
var _25745__$1 = this;return (new cljs.core.async.t25743(self__.flag,self__.alt_flag,meta25744__$1));
});})(flag))
;
cljs.core.async.__GT_t25743 = ((function (flag){
return (function __GT_t25743(flag__$1,alt_flag__$1,meta25744){return (new cljs.core.async.t25743(flag__$1,alt_flag__$1,meta25744));
});})(flag))
;
}
return (new cljs.core.async.t25743(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t25749 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25749 = (function (cb,flag,alt_handler,meta25750){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta25750 = meta25750;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25749.cljs$lang$type = true;
cljs.core.async.t25749.cljs$lang$ctorStr = "cljs.core.async/t25749";
cljs.core.async.t25749.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t25749");
});
cljs.core.async.t25749.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25749.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t25749.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t25749.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25751){var self__ = this;
var _25751__$1 = this;return self__.meta25750;
});
cljs.core.async.t25749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25751,meta25750__$1){var self__ = this;
var _25751__$1 = this;return (new cljs.core.async.t25749(self__.cb,self__.flag,self__.alt_handler,meta25750__$1));
});
cljs.core.async.__GT_t25749 = (function __GT_t25749(cb__$1,flag__$1,alt_handler__$1,meta25750){return (new cljs.core.async.t25749(cb__$1,flag__$1,alt_handler__$1,meta25750));
});
}
return (new cljs.core.async.t25749(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25752_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25752_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25753_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25753_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__19803__auto__ = wport;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__28447 = (i + 1);
i = G__28447;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__19803__auto__ = ret;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__19791__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__19791__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__19791__auto__;
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
var alts_BANG___delegate = function (ports,p__25754){var map__25756 = p__25754;var map__25756__$1 = ((cljs.core.seq_QMARK_.call(null,map__25756))?cljs.core.apply.call(null,cljs.core.hash_map,map__25756):map__25756);var opts = map__25756__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__25754 = null;if (arguments.length > 1) {
  p__25754 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__25754);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__28448){
var ports = cljs.core.first(arglist__28448);
var p__25754 = cljs.core.rest(arglist__28448);
return alts_BANG___delegate(ports,p__25754);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__22577__auto___28449 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___28449){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto___28449){
return (function (state_25827){var state_val_25828 = (state_25827[1]);if((state_val_25828 === 1))
{var state_25827__$1 = state_25827;var statearr_25829_28450 = state_25827__$1;(statearr_25829_28450[2] = null);
(statearr_25829_28450[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25828 === 2))
{var state_25827__$1 = state_25827;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25827__$1,4,from);
} else
{if((state_val_25828 === 3))
{var inst_25825 = (state_25827[2]);var state_25827__$1 = state_25827;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25827__$1,inst_25825);
} else
{if((state_val_25828 === 4))
{var inst_25806 = (state_25827[7]);var inst_25806__$1 = (state_25827[2]);var inst_25807 = (inst_25806__$1 == null);var state_25827__$1 = (function (){var statearr_25830 = state_25827;(statearr_25830[7] = inst_25806__$1);
return statearr_25830;
})();if(cljs.core.truth_(inst_25807))
{var statearr_25831_28451 = state_25827__$1;(statearr_25831_28451[1] = 5);
} else
{var statearr_25832_28452 = state_25827__$1;(statearr_25832_28452[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25828 === 5))
{var state_25827__$1 = state_25827;if(cljs.core.truth_(close_QMARK_))
{var statearr_25833_28453 = state_25827__$1;(statearr_25833_28453[1] = 8);
} else
{var statearr_25834_28454 = state_25827__$1;(statearr_25834_28454[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25828 === 6))
{var inst_25806 = (state_25827[7]);var state_25827__$1 = state_25827;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25827__$1,11,to,inst_25806);
} else
{if((state_val_25828 === 7))
{var inst_25823 = (state_25827[2]);var state_25827__$1 = state_25827;var statearr_25835_28455 = state_25827__$1;(statearr_25835_28455[2] = inst_25823);
(statearr_25835_28455[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25828 === 8))
{var inst_25810 = cljs.core.async.close_BANG_.call(null,to);var state_25827__$1 = state_25827;var statearr_25836_28456 = state_25827__$1;(statearr_25836_28456[2] = inst_25810);
(statearr_25836_28456[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25828 === 9))
{var state_25827__$1 = state_25827;var statearr_25837_28457 = state_25827__$1;(statearr_25837_28457[2] = null);
(statearr_25837_28457[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25828 === 10))
{var inst_25813 = (state_25827[2]);var state_25827__$1 = state_25827;var statearr_25838_28458 = state_25827__$1;(statearr_25838_28458[2] = inst_25813);
(statearr_25838_28458[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25828 === 11))
{var inst_25816 = (state_25827[2]);var state_25827__$1 = state_25827;if(cljs.core.truth_(inst_25816))
{var statearr_25839_28459 = state_25827__$1;(statearr_25839_28459[1] = 12);
} else
{var statearr_25840_28460 = state_25827__$1;(statearr_25840_28460[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25828 === 12))
{var state_25827__$1 = state_25827;var statearr_25841_28461 = state_25827__$1;(statearr_25841_28461[2] = null);
(statearr_25841_28461[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25828 === 13))
{var state_25827__$1 = state_25827;var statearr_25842_28462 = state_25827__$1;(statearr_25842_28462[2] = null);
(statearr_25842_28462[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25828 === 14))
{var inst_25821 = (state_25827[2]);var state_25827__$1 = state_25827;var statearr_25843_28463 = state_25827__$1;(statearr_25843_28463[2] = inst_25821);
(statearr_25843_28463[1] = 7);
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
});})(c__22577__auto___28449))
;return ((function (switch__22501__auto__,c__22577__auto___28449){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_25847 = [null,null,null,null,null,null,null,null];(statearr_25847[0] = state_machine__22502__auto__);
(statearr_25847[1] = 1);
return statearr_25847;
});
var state_machine__22502__auto____1 = (function (state_25827){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_25827);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e25848){if((e25848 instanceof Object))
{var ex__22505__auto__ = e25848;var statearr_25849_28464 = state_25827;(statearr_25849_28464[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25827);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25848;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28465 = state_25827;
state_25827 = G__28465;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_25827){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_25827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto___28449))
})();var state__22579__auto__ = (function (){var statearr_25850 = f__22578__auto__.call(null);(statearr_25850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28449);
return statearr_25850;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___28449))
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
return (function (p__26033){var vec__26034 = p__26033;var v = cljs.core.nth.call(null,vec__26034,0,null);var p = cljs.core.nth.call(null,vec__26034,1,null);var job = vec__26034;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,1,xf,ex_handler);var c__22577__auto___28466 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___28466,res,vec__26034,v,p,job,jobs,results){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto___28466,res,vec__26034,v,p,job,jobs,results){
return (function (state_26039){var state_val_26040 = (state_26039[1]);if((state_val_26040 === 2))
{var inst_26036 = (state_26039[2]);var inst_26037 = cljs.core.async.close_BANG_.call(null,res);var state_26039__$1 = (function (){var statearr_26041 = state_26039;(statearr_26041[7] = inst_26036);
return statearr_26041;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26039__$1,inst_26037);
} else
{if((state_val_26040 === 1))
{var state_26039__$1 = state_26039;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26039__$1,2,res,v);
} else
{return null;
}
}
});})(c__22577__auto___28466,res,vec__26034,v,p,job,jobs,results))
;return ((function (switch__22501__auto__,c__22577__auto___28466,res,vec__26034,v,p,job,jobs,results){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_26045 = [null,null,null,null,null,null,null,null];(statearr_26045[0] = state_machine__22502__auto__);
(statearr_26045[1] = 1);
return statearr_26045;
});
var state_machine__22502__auto____1 = (function (state_26039){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_26039);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e26046){if((e26046 instanceof Object))
{var ex__22505__auto__ = e26046;var statearr_26047_28467 = state_26039;(statearr_26047_28467[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26039);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26046;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28468 = state_26039;
state_26039 = G__28468;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_26039){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_26039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto___28466,res,vec__26034,v,p,job,jobs,results))
})();var state__22579__auto__ = (function (){var statearr_26048 = f__22578__auto__.call(null);(statearr_26048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28466);
return statearr_26048;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___28466,res,vec__26034,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__26049){var vec__26050 = p__26049;var v = cljs.core.nth.call(null,vec__26050,0,null);var p = cljs.core.nth.call(null,vec__26050,1,null);var job = vec__26050;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,1);xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__20651__auto___28469 = n;var __28470 = 0;while(true){
if((__28470 < n__20651__auto___28469))
{var G__26051_28471 = type;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"async","async",1107031534),G__26051_28471))
{var c__22577__auto___28472 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (__28470,c__22577__auto___28472,G__26051_28471,n__20651__auto___28469,jobs,results,process,async){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (__28470,c__22577__auto___28472,G__26051_28471,n__20651__auto___28469,jobs,results,process,async){
return (function (state_26064){var state_val_26065 = (state_26064[1]);if((state_val_26065 === 7))
{var inst_26060 = (state_26064[2]);var state_26064__$1 = state_26064;var statearr_26066_28473 = state_26064__$1;(statearr_26066_28473[2] = inst_26060);
(statearr_26066_28473[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26065 === 6))
{var state_26064__$1 = state_26064;var statearr_26067_28474 = state_26064__$1;(statearr_26067_28474[2] = null);
(statearr_26067_28474[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26065 === 5))
{var state_26064__$1 = state_26064;var statearr_26068_28475 = state_26064__$1;(statearr_26068_28475[2] = null);
(statearr_26068_28475[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26065 === 4))
{var inst_26054 = (state_26064[2]);var inst_26055 = async.call(null,inst_26054);var state_26064__$1 = state_26064;if(cljs.core.truth_(inst_26055))
{var statearr_26069_28476 = state_26064__$1;(statearr_26069_28476[1] = 5);
} else
{var statearr_26070_28477 = state_26064__$1;(statearr_26070_28477[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26065 === 3))
{var inst_26062 = (state_26064[2]);var state_26064__$1 = state_26064;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26064__$1,inst_26062);
} else
{if((state_val_26065 === 2))
{var state_26064__$1 = state_26064;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26064__$1,4,jobs);
} else
{if((state_val_26065 === 1))
{var state_26064__$1 = state_26064;var statearr_26071_28478 = state_26064__$1;(statearr_26071_28478[2] = null);
(statearr_26071_28478[1] = 2);
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
});})(__28470,c__22577__auto___28472,G__26051_28471,n__20651__auto___28469,jobs,results,process,async))
;return ((function (__28470,switch__22501__auto__,c__22577__auto___28472,G__26051_28471,n__20651__auto___28469,jobs,results,process,async){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_26075 = [null,null,null,null,null,null,null];(statearr_26075[0] = state_machine__22502__auto__);
(statearr_26075[1] = 1);
return statearr_26075;
});
var state_machine__22502__auto____1 = (function (state_26064){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_26064);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e26076){if((e26076 instanceof Object))
{var ex__22505__auto__ = e26076;var statearr_26077_28479 = state_26064;(statearr_26077_28479[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26064);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26076;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28480 = state_26064;
state_26064 = G__28480;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_26064){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_26064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(__28470,switch__22501__auto__,c__22577__auto___28472,G__26051_28471,n__20651__auto___28469,jobs,results,process,async))
})();var state__22579__auto__ = (function (){var statearr_26078 = f__22578__auto__.call(null);(statearr_26078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28472);
return statearr_26078;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(__28470,c__22577__auto___28472,G__26051_28471,n__20651__auto___28469,jobs,results,process,async))
);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compute","compute",1964407721),G__26051_28471))
{var c__22577__auto___28481 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (__28470,c__22577__auto___28481,G__26051_28471,n__20651__auto___28469,jobs,results,process,async){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (__28470,c__22577__auto___28481,G__26051_28471,n__20651__auto___28469,jobs,results,process,async){
return (function (state_26091){var state_val_26092 = (state_26091[1]);if((state_val_26092 === 7))
{var inst_26087 = (state_26091[2]);var state_26091__$1 = state_26091;var statearr_26093_28482 = state_26091__$1;(statearr_26093_28482[2] = inst_26087);
(statearr_26093_28482[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26092 === 6))
{var state_26091__$1 = state_26091;var statearr_26094_28483 = state_26091__$1;(statearr_26094_28483[2] = null);
(statearr_26094_28483[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26092 === 5))
{var state_26091__$1 = state_26091;var statearr_26095_28484 = state_26091__$1;(statearr_26095_28484[2] = null);
(statearr_26095_28484[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26092 === 4))
{var inst_26081 = (state_26091[2]);var inst_26082 = process.call(null,inst_26081);var state_26091__$1 = state_26091;if(cljs.core.truth_(inst_26082))
{var statearr_26096_28485 = state_26091__$1;(statearr_26096_28485[1] = 5);
} else
{var statearr_26097_28486 = state_26091__$1;(statearr_26097_28486[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26092 === 3))
{var inst_26089 = (state_26091[2]);var state_26091__$1 = state_26091;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26091__$1,inst_26089);
} else
{if((state_val_26092 === 2))
{var state_26091__$1 = state_26091;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26091__$1,4,jobs);
} else
{if((state_val_26092 === 1))
{var state_26091__$1 = state_26091;var statearr_26098_28487 = state_26091__$1;(statearr_26098_28487[2] = null);
(statearr_26098_28487[1] = 2);
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
});})(__28470,c__22577__auto___28481,G__26051_28471,n__20651__auto___28469,jobs,results,process,async))
;return ((function (__28470,switch__22501__auto__,c__22577__auto___28481,G__26051_28471,n__20651__auto___28469,jobs,results,process,async){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_26102 = [null,null,null,null,null,null,null];(statearr_26102[0] = state_machine__22502__auto__);
(statearr_26102[1] = 1);
return statearr_26102;
});
var state_machine__22502__auto____1 = (function (state_26091){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_26091);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e26103){if((e26103 instanceof Object))
{var ex__22505__auto__ = e26103;var statearr_26104_28488 = state_26091;(statearr_26104_28488[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26091);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26103;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28489 = state_26091;
state_26091 = G__28489;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_26091){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_26091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(__28470,switch__22501__auto__,c__22577__auto___28481,G__26051_28471,n__20651__auto___28469,jobs,results,process,async))
})();var state__22579__auto__ = (function (){var statearr_26105 = f__22578__auto__.call(null);(statearr_26105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28481);
return statearr_26105;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(__28470,c__22577__auto___28481,G__26051_28471,n__20651__auto___28469,jobs,results,process,async))
);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));
} else
{}
}
}
{
var G__28490 = (__28470 + 1);
__28470 = G__28490;
continue;
}
} else
{}
break;
}
var c__22577__auto___28491 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___28491,jobs,results,process,async){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto___28491,jobs,results,process,async){
return (function (state_26126){var state_val_26127 = (state_26126[1]);if((state_val_26127 === 9))
{var inst_26119 = (state_26126[2]);var state_26126__$1 = (function (){var statearr_26128 = state_26126;(statearr_26128[7] = inst_26119);
return statearr_26128;
})();var statearr_26129_28492 = state_26126__$1;(statearr_26129_28492[2] = null);
(statearr_26129_28492[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26127 === 8))
{var inst_26113 = (state_26126[8]);var inst_26117 = (state_26126[2]);var state_26126__$1 = (function (){var statearr_26130 = state_26126;(statearr_26130[9] = inst_26117);
return statearr_26130;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26126__$1,9,results,inst_26113);
} else
{if((state_val_26127 === 7))
{var inst_26122 = (state_26126[2]);var state_26126__$1 = state_26126;var statearr_26131_28493 = state_26126__$1;(statearr_26131_28493[2] = inst_26122);
(statearr_26131_28493[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26127 === 6))
{var inst_26108 = (state_26126[10]);var inst_26113 = (state_26126[8]);var inst_26113__$1 = cljs.core.async.chan.call(null,1);var inst_26114 = [inst_26108,inst_26113__$1];var inst_26115 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_26114,null));var state_26126__$1 = (function (){var statearr_26132 = state_26126;(statearr_26132[8] = inst_26113__$1);
return statearr_26132;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26126__$1,8,jobs,inst_26115);
} else
{if((state_val_26127 === 5))
{var inst_26111 = cljs.core.async.close_BANG_.call(null,jobs);var state_26126__$1 = state_26126;var statearr_26133_28494 = state_26126__$1;(statearr_26133_28494[2] = inst_26111);
(statearr_26133_28494[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26127 === 4))
{var inst_26108 = (state_26126[10]);var inst_26108__$1 = (state_26126[2]);var inst_26109 = (inst_26108__$1 == null);var state_26126__$1 = (function (){var statearr_26134 = state_26126;(statearr_26134[10] = inst_26108__$1);
return statearr_26134;
})();if(cljs.core.truth_(inst_26109))
{var statearr_26135_28495 = state_26126__$1;(statearr_26135_28495[1] = 5);
} else
{var statearr_26136_28496 = state_26126__$1;(statearr_26136_28496[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26127 === 3))
{var inst_26124 = (state_26126[2]);var state_26126__$1 = state_26126;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26126__$1,inst_26124);
} else
{if((state_val_26127 === 2))
{var state_26126__$1 = state_26126;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26126__$1,4,from);
} else
{if((state_val_26127 === 1))
{var state_26126__$1 = state_26126;var statearr_26137_28497 = state_26126__$1;(statearr_26137_28497[2] = null);
(statearr_26137_28497[1] = 2);
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
});})(c__22577__auto___28491,jobs,results,process,async))
;return ((function (switch__22501__auto__,c__22577__auto___28491,jobs,results,process,async){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_26141 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26141[0] = state_machine__22502__auto__);
(statearr_26141[1] = 1);
return statearr_26141;
});
var state_machine__22502__auto____1 = (function (state_26126){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_26126);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e26142){if((e26142 instanceof Object))
{var ex__22505__auto__ = e26142;var statearr_26143_28498 = state_26126;(statearr_26143_28498[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26126);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26142;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28499 = state_26126;
state_26126 = G__28499;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_26126){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_26126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto___28491,jobs,results,process,async))
})();var state__22579__auto__ = (function (){var statearr_26144 = f__22578__auto__.call(null);(statearr_26144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28491);
return statearr_26144;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___28491,jobs,results,process,async))
);
var c__22577__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto__,jobs,results,process,async){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto__,jobs,results,process,async){
return (function (state_26182){var state_val_26183 = (state_26182[1]);if((state_val_26183 === 1))
{var state_26182__$1 = state_26182;var statearr_26184_28500 = state_26182__$1;(statearr_26184_28500[2] = null);
(statearr_26184_28500[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26183 === 2))
{var state_26182__$1 = state_26182;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26182__$1,4,results);
} else
{if((state_val_26183 === 3))
{var inst_26180 = (state_26182[2]);var state_26182__$1 = state_26182;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26182__$1,inst_26180);
} else
{if((state_val_26183 === 4))
{var inst_26147 = (state_26182[7]);var inst_26147__$1 = (state_26182[2]);var inst_26148 = (inst_26147__$1 == null);var state_26182__$1 = (function (){var statearr_26185 = state_26182;(statearr_26185[7] = inst_26147__$1);
return statearr_26185;
})();if(cljs.core.truth_(inst_26148))
{var statearr_26186_28501 = state_26182__$1;(statearr_26186_28501[1] = 5);
} else
{var statearr_26187_28502 = state_26182__$1;(statearr_26187_28502[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26183 === 5))
{var state_26182__$1 = state_26182;if(cljs.core.truth_(close_QMARK_))
{var statearr_26188_28503 = state_26182__$1;(statearr_26188_28503[1] = 8);
} else
{var statearr_26189_28504 = state_26182__$1;(statearr_26189_28504[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26183 === 6))
{var inst_26147 = (state_26182[7]);var state_26182__$1 = state_26182;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26182__$1,11,inst_26147);
} else
{if((state_val_26183 === 7))
{var inst_26178 = (state_26182[2]);var state_26182__$1 = state_26182;var statearr_26190_28505 = state_26182__$1;(statearr_26190_28505[2] = inst_26178);
(statearr_26190_28505[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26183 === 8))
{var inst_26151 = cljs.core.async.close_BANG_.call(null,to);var state_26182__$1 = state_26182;var statearr_26191_28506 = state_26182__$1;(statearr_26191_28506[2] = inst_26151);
(statearr_26191_28506[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26183 === 9))
{var state_26182__$1 = state_26182;var statearr_26192_28507 = state_26182__$1;(statearr_26192_28507[2] = null);
(statearr_26192_28507[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26183 === 10))
{var inst_26154 = (state_26182[2]);var state_26182__$1 = state_26182;var statearr_26193_28508 = state_26182__$1;(statearr_26193_28508[2] = inst_26154);
(statearr_26193_28508[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26183 === 11))
{var inst_26157 = (state_26182[2]);var state_26182__$1 = (function (){var statearr_26194 = state_26182;(statearr_26194[8] = inst_26157);
return statearr_26194;
})();var statearr_26195_28509 = state_26182__$1;(statearr_26195_28509[2] = null);
(statearr_26195_28509[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26183 === 12))
{var inst_26157 = (state_26182[8]);var state_26182__$1 = state_26182;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26182__$1,14,inst_26157);
} else
{if((state_val_26183 === 13))
{var inst_26175 = (state_26182[2]);var state_26182__$1 = (function (){var statearr_26196 = state_26182;(statearr_26196[9] = inst_26175);
return statearr_26196;
})();var statearr_26197_28510 = state_26182__$1;(statearr_26197_28510[2] = null);
(statearr_26197_28510[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26183 === 14))
{var inst_26160 = (state_26182[10]);var inst_26162 = (state_26182[11]);var inst_26160__$1 = (state_26182[2]);var inst_26161 = (inst_26160__$1 == null);var inst_26162__$1 = cljs.core.not.call(null,inst_26161);var state_26182__$1 = (function (){var statearr_26198 = state_26182;(statearr_26198[10] = inst_26160__$1);
(statearr_26198[11] = inst_26162__$1);
return statearr_26198;
})();if(inst_26162__$1)
{var statearr_26199_28511 = state_26182__$1;(statearr_26199_28511[1] = 15);
} else
{var statearr_26200_28512 = state_26182__$1;(statearr_26200_28512[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26183 === 15))
{var inst_26160 = (state_26182[10]);var state_26182__$1 = state_26182;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26182__$1,18,to,inst_26160);
} else
{if((state_val_26183 === 16))
{var inst_26162 = (state_26182[11]);var state_26182__$1 = state_26182;var statearr_26201_28513 = state_26182__$1;(statearr_26201_28513[2] = inst_26162);
(statearr_26201_28513[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26183 === 17))
{var inst_26168 = (state_26182[2]);var state_26182__$1 = state_26182;if(cljs.core.truth_(inst_26168))
{var statearr_26202_28514 = state_26182__$1;(statearr_26202_28514[1] = 19);
} else
{var statearr_26203_28515 = state_26182__$1;(statearr_26203_28515[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26183 === 18))
{var inst_26165 = (state_26182[2]);var state_26182__$1 = state_26182;var statearr_26204_28516 = state_26182__$1;(statearr_26204_28516[2] = inst_26165);
(statearr_26204_28516[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26183 === 19))
{var state_26182__$1 = state_26182;var statearr_26205_28517 = state_26182__$1;(statearr_26205_28517[2] = null);
(statearr_26205_28517[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26183 === 20))
{var state_26182__$1 = state_26182;var statearr_26206_28518 = state_26182__$1;(statearr_26206_28518[2] = null);
(statearr_26206_28518[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26183 === 21))
{var inst_26173 = (state_26182[2]);var state_26182__$1 = state_26182;var statearr_26207_28519 = state_26182__$1;(statearr_26207_28519[2] = inst_26173);
(statearr_26207_28519[1] = 13);
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
});})(c__22577__auto__,jobs,results,process,async))
;return ((function (switch__22501__auto__,c__22577__auto__,jobs,results,process,async){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_26211 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26211[0] = state_machine__22502__auto__);
(statearr_26211[1] = 1);
return statearr_26211;
});
var state_machine__22502__auto____1 = (function (state_26182){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_26182);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e26212){if((e26212 instanceof Object))
{var ex__22505__auto__ = e26212;var statearr_26213_28520 = state_26182;(statearr_26213_28520[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26182);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26212;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28521 = state_26182;
state_26182 = G__28521;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_26182){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_26182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto__,jobs,results,process,async))
})();var state__22579__auto__ = (function (){var statearr_26214 = f__22578__auto__.call(null);(statearr_26214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto__);
return statearr_26214;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto__,jobs,results,process,async))
);
return c__22577__auto__;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__22577__auto___28522 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___28522,tc,fc){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto___28522,tc,fc){
return (function (state_26290){var state_val_26291 = (state_26290[1]);if((state_val_26291 === 1))
{var state_26290__$1 = state_26290;var statearr_26292_28523 = state_26290__$1;(statearr_26292_28523[2] = null);
(statearr_26292_28523[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26291 === 2))
{var state_26290__$1 = state_26290;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26290__$1,4,ch);
} else
{if((state_val_26291 === 3))
{var inst_26288 = (state_26290[2]);var state_26290__$1 = state_26290;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26290__$1,inst_26288);
} else
{if((state_val_26291 === 4))
{var inst_26267 = (state_26290[7]);var inst_26267__$1 = (state_26290[2]);var inst_26268 = (inst_26267__$1 == null);var state_26290__$1 = (function (){var statearr_26293 = state_26290;(statearr_26293[7] = inst_26267__$1);
return statearr_26293;
})();if(cljs.core.truth_(inst_26268))
{var statearr_26294_28524 = state_26290__$1;(statearr_26294_28524[1] = 5);
} else
{var statearr_26295_28525 = state_26290__$1;(statearr_26295_28525[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26291 === 5))
{var inst_26270 = cljs.core.async.close_BANG_.call(null,tc);var inst_26271 = cljs.core.async.close_BANG_.call(null,fc);var state_26290__$1 = (function (){var statearr_26296 = state_26290;(statearr_26296[8] = inst_26270);
return statearr_26296;
})();var statearr_26297_28526 = state_26290__$1;(statearr_26297_28526[2] = inst_26271);
(statearr_26297_28526[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26291 === 6))
{var inst_26267 = (state_26290[7]);var inst_26273 = p.call(null,inst_26267);var state_26290__$1 = state_26290;if(cljs.core.truth_(inst_26273))
{var statearr_26298_28527 = state_26290__$1;(statearr_26298_28527[1] = 9);
} else
{var statearr_26299_28528 = state_26290__$1;(statearr_26299_28528[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26291 === 7))
{var inst_26286 = (state_26290[2]);var state_26290__$1 = state_26290;var statearr_26300_28529 = state_26290__$1;(statearr_26300_28529[2] = inst_26286);
(statearr_26300_28529[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26291 === 8))
{var inst_26279 = (state_26290[2]);var state_26290__$1 = state_26290;if(cljs.core.truth_(inst_26279))
{var statearr_26301_28530 = state_26290__$1;(statearr_26301_28530[1] = 12);
} else
{var statearr_26302_28531 = state_26290__$1;(statearr_26302_28531[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26291 === 9))
{var state_26290__$1 = state_26290;var statearr_26303_28532 = state_26290__$1;(statearr_26303_28532[2] = tc);
(statearr_26303_28532[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26291 === 10))
{var state_26290__$1 = state_26290;var statearr_26304_28533 = state_26290__$1;(statearr_26304_28533[2] = fc);
(statearr_26304_28533[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26291 === 11))
{var inst_26267 = (state_26290[7]);var inst_26277 = (state_26290[2]);var state_26290__$1 = state_26290;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26290__$1,8,inst_26277,inst_26267);
} else
{if((state_val_26291 === 12))
{var state_26290__$1 = state_26290;var statearr_26305_28534 = state_26290__$1;(statearr_26305_28534[2] = null);
(statearr_26305_28534[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26291 === 13))
{var state_26290__$1 = state_26290;var statearr_26306_28535 = state_26290__$1;(statearr_26306_28535[2] = null);
(statearr_26306_28535[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26291 === 14))
{var inst_26284 = (state_26290[2]);var state_26290__$1 = state_26290;var statearr_26307_28536 = state_26290__$1;(statearr_26307_28536[2] = inst_26284);
(statearr_26307_28536[1] = 7);
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
});})(c__22577__auto___28522,tc,fc))
;return ((function (switch__22501__auto__,c__22577__auto___28522,tc,fc){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_26311 = [null,null,null,null,null,null,null,null,null];(statearr_26311[0] = state_machine__22502__auto__);
(statearr_26311[1] = 1);
return statearr_26311;
});
var state_machine__22502__auto____1 = (function (state_26290){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_26290);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e26312){if((e26312 instanceof Object))
{var ex__22505__auto__ = e26312;var statearr_26313_28537 = state_26290;(statearr_26313_28537[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26290);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26312;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28538 = state_26290;
state_26290 = G__28538;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_26290){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_26290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto___28522,tc,fc))
})();var state__22579__auto__ = (function (){var statearr_26314 = f__22578__auto__.call(null);(statearr_26314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28522);
return statearr_26314;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___28522,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__22577__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto__){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto__){
return (function (state_26361){var state_val_26362 = (state_26361[1]);if((state_val_26362 === 7))
{var inst_26357 = (state_26361[2]);var state_26361__$1 = state_26361;var statearr_26363_28539 = state_26361__$1;(statearr_26363_28539[2] = inst_26357);
(statearr_26363_28539[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26362 === 6))
{var inst_26350 = (state_26361[7]);var inst_26347 = (state_26361[8]);var inst_26354 = f.call(null,inst_26347,inst_26350);var inst_26347__$1 = inst_26354;var state_26361__$1 = (function (){var statearr_26364 = state_26361;(statearr_26364[8] = inst_26347__$1);
return statearr_26364;
})();var statearr_26365_28540 = state_26361__$1;(statearr_26365_28540[2] = null);
(statearr_26365_28540[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26362 === 5))
{var inst_26347 = (state_26361[8]);var state_26361__$1 = state_26361;var statearr_26366_28541 = state_26361__$1;(statearr_26366_28541[2] = inst_26347);
(statearr_26366_28541[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26362 === 4))
{var inst_26350 = (state_26361[7]);var inst_26350__$1 = (state_26361[2]);var inst_26351 = (inst_26350__$1 == null);var state_26361__$1 = (function (){var statearr_26367 = state_26361;(statearr_26367[7] = inst_26350__$1);
return statearr_26367;
})();if(cljs.core.truth_(inst_26351))
{var statearr_26368_28542 = state_26361__$1;(statearr_26368_28542[1] = 5);
} else
{var statearr_26369_28543 = state_26361__$1;(statearr_26369_28543[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26362 === 3))
{var inst_26359 = (state_26361[2]);var state_26361__$1 = state_26361;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26361__$1,inst_26359);
} else
{if((state_val_26362 === 2))
{var state_26361__$1 = state_26361;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26361__$1,4,ch);
} else
{if((state_val_26362 === 1))
{var inst_26347 = init;var state_26361__$1 = (function (){var statearr_26370 = state_26361;(statearr_26370[8] = inst_26347);
return statearr_26370;
})();var statearr_26371_28544 = state_26361__$1;(statearr_26371_28544[2] = null);
(statearr_26371_28544[1] = 2);
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
});})(c__22577__auto__))
;return ((function (switch__22501__auto__,c__22577__auto__){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_26375 = [null,null,null,null,null,null,null,null,null];(statearr_26375[0] = state_machine__22502__auto__);
(statearr_26375[1] = 1);
return statearr_26375;
});
var state_machine__22502__auto____1 = (function (state_26361){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_26361);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e26376){if((e26376 instanceof Object))
{var ex__22505__auto__ = e26376;var statearr_26377_28545 = state_26361;(statearr_26377_28545[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26361);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26376;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28546 = state_26361;
state_26361 = G__28546;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_26361){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_26361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto__))
})();var state__22579__auto__ = (function (){var statearr_26378 = f__22578__auto__.call(null);(statearr_26378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto__);
return statearr_26378;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto__))
);
return c__22577__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__22577__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto__){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto__){
return (function (state_26452){var state_val_26453 = (state_26452[1]);if((state_val_26453 === 1))
{var inst_26428 = cljs.core.seq.call(null,coll);var inst_26429 = inst_26428;var state_26452__$1 = (function (){var statearr_26454 = state_26452;(statearr_26454[7] = inst_26429);
return statearr_26454;
})();var statearr_26455_28547 = state_26452__$1;(statearr_26455_28547[2] = null);
(statearr_26455_28547[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26453 === 2))
{var inst_26429 = (state_26452[7]);var state_26452__$1 = state_26452;if(cljs.core.truth_(inst_26429))
{var statearr_26456_28548 = state_26452__$1;(statearr_26456_28548[1] = 4);
} else
{var statearr_26457_28549 = state_26452__$1;(statearr_26457_28549[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26453 === 3))
{var inst_26450 = (state_26452[2]);var state_26452__$1 = state_26452;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26452__$1,inst_26450);
} else
{if((state_val_26453 === 4))
{var inst_26429 = (state_26452[7]);var inst_26432 = cljs.core.first.call(null,inst_26429);var state_26452__$1 = state_26452;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26452__$1,7,ch,inst_26432);
} else
{if((state_val_26453 === 5))
{var inst_26429 = (state_26452[7]);var state_26452__$1 = state_26452;var statearr_26458_28550 = state_26452__$1;(statearr_26458_28550[2] = inst_26429);
(statearr_26458_28550[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26453 === 6))
{var inst_26437 = (state_26452[2]);var state_26452__$1 = state_26452;if(cljs.core.truth_(inst_26437))
{var statearr_26459_28551 = state_26452__$1;(statearr_26459_28551[1] = 8);
} else
{var statearr_26460_28552 = state_26452__$1;(statearr_26460_28552[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26453 === 7))
{var inst_26434 = (state_26452[2]);var state_26452__$1 = state_26452;var statearr_26461_28553 = state_26452__$1;(statearr_26461_28553[2] = inst_26434);
(statearr_26461_28553[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26453 === 8))
{var inst_26429 = (state_26452[7]);var inst_26439 = cljs.core.next.call(null,inst_26429);var inst_26429__$1 = inst_26439;var state_26452__$1 = (function (){var statearr_26462 = state_26452;(statearr_26462[7] = inst_26429__$1);
return statearr_26462;
})();var statearr_26463_28554 = state_26452__$1;(statearr_26463_28554[2] = null);
(statearr_26463_28554[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26453 === 9))
{var state_26452__$1 = state_26452;if(cljs.core.truth_(close_QMARK_))
{var statearr_26464_28555 = state_26452__$1;(statearr_26464_28555[1] = 11);
} else
{var statearr_26465_28556 = state_26452__$1;(statearr_26465_28556[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26453 === 10))
{var inst_26448 = (state_26452[2]);var state_26452__$1 = state_26452;var statearr_26466_28557 = state_26452__$1;(statearr_26466_28557[2] = inst_26448);
(statearr_26466_28557[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26453 === 11))
{var inst_26443 = cljs.core.async.close_BANG_.call(null,ch);var state_26452__$1 = state_26452;var statearr_26467_28558 = state_26452__$1;(statearr_26467_28558[2] = inst_26443);
(statearr_26467_28558[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26453 === 12))
{var state_26452__$1 = state_26452;var statearr_26468_28559 = state_26452__$1;(statearr_26468_28559[2] = null);
(statearr_26468_28559[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26453 === 13))
{var inst_26446 = (state_26452[2]);var state_26452__$1 = state_26452;var statearr_26469_28560 = state_26452__$1;(statearr_26469_28560[2] = inst_26446);
(statearr_26469_28560[1] = 10);
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
});})(c__22577__auto__))
;return ((function (switch__22501__auto__,c__22577__auto__){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_26473 = [null,null,null,null,null,null,null,null];(statearr_26473[0] = state_machine__22502__auto__);
(statearr_26473[1] = 1);
return statearr_26473;
});
var state_machine__22502__auto____1 = (function (state_26452){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_26452);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e26474){if((e26474 instanceof Object))
{var ex__22505__auto__ = e26474;var statearr_26475_28561 = state_26452;(statearr_26475_28561[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26452);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26474;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28562 = state_26452;
state_26452 = G__28562;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_26452){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_26452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto__))
})();var state__22579__auto__ = (function (){var statearr_26476 = f__22578__auto__.call(null);(statearr_26476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto__);
return statearr_26476;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto__))
);
return c__22577__auto__;
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
cljs.core.async.Mux = (function (){var obj26478 = {};return obj26478;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__19791__auto__ = _;if(and__19791__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__20430__auto__ = (((_ == null))?null:_);return (function (){var or__19803__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj26480 = {};return obj26480;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__19791__auto__ = m;if(and__19791__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__19791__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__20430__auto__ = (((m == null))?null:m);return (function (){var or__19803__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__19791__auto__ = m;if(and__19791__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__20430__auto__ = (((m == null))?null:m);return (function (){var or__19803__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__19791__auto__ = m;if(and__19791__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__20430__auto__ = (((m == null))?null:m);return (function (){var or__19803__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t26702 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26702 = (function (cs,ch,mult,meta26703){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta26703 = meta26703;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26702.cljs$lang$type = true;
cljs.core.async.t26702.cljs$lang$ctorStr = "cljs.core.async/t26702";
cljs.core.async.t26702.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t26702");
});})(cs))
;
cljs.core.async.t26702.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t26702.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t26702.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t26702.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t26702.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26702.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t26702.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26704){var self__ = this;
var _26704__$1 = this;return self__.meta26703;
});})(cs))
;
cljs.core.async.t26702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26704,meta26703__$1){var self__ = this;
var _26704__$1 = this;return (new cljs.core.async.t26702(self__.cs,self__.ch,self__.mult,meta26703__$1));
});})(cs))
;
cljs.core.async.__GT_t26702 = ((function (cs){
return (function __GT_t26702(cs__$1,ch__$1,mult__$1,meta26703){return (new cljs.core.async.t26702(cs__$1,ch__$1,mult__$1,meta26703));
});})(cs))
;
}
return (new cljs.core.async.t26702(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__22577__auto___28563 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___28563,cs,m,dchan,dctr,done){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto___28563,cs,m,dchan,dctr,done){
return (function (state_26835){var state_val_26836 = (state_26835[1]);if((state_val_26836 === 32))
{var inst_26778 = (state_26835[7]);var inst_26777 = (state_26835[8]);var inst_26776 = (state_26835[9]);var inst_26775 = (state_26835[10]);var inst_26790 = (state_26835[2]);var inst_26791 = (inst_26778 + 1);var tmp26837 = inst_26777;var tmp26838 = inst_26776;var tmp26839 = inst_26775;var inst_26775__$1 = tmp26839;var inst_26776__$1 = tmp26838;var inst_26777__$1 = tmp26837;var inst_26778__$1 = inst_26791;var state_26835__$1 = (function (){var statearr_26840 = state_26835;(statearr_26840[11] = inst_26790);
(statearr_26840[7] = inst_26778__$1);
(statearr_26840[8] = inst_26777__$1);
(statearr_26840[9] = inst_26776__$1);
(statearr_26840[10] = inst_26775__$1);
return statearr_26840;
})();var statearr_26841_28564 = state_26835__$1;(statearr_26841_28564[2] = null);
(statearr_26841_28564[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26836 === 1))
{var state_26835__$1 = state_26835;var statearr_26842_28565 = state_26835__$1;(statearr_26842_28565[2] = null);
(statearr_26842_28565[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26836 === 33))
{var inst_26794 = (state_26835[12]);var inst_26796 = cljs.core.chunked_seq_QMARK_.call(null,inst_26794);var state_26835__$1 = state_26835;if(inst_26796)
{var statearr_26843_28566 = state_26835__$1;(statearr_26843_28566[1] = 36);
} else
{var statearr_26844_28567 = state_26835__$1;(statearr_26844_28567[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26836 === 2))
{var state_26835__$1 = state_26835;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26835__$1,4,ch);
} else
{if((state_val_26836 === 34))
{var state_26835__$1 = state_26835;var statearr_26845_28568 = state_26835__$1;(statearr_26845_28568[2] = null);
(statearr_26845_28568[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26836 === 3))
{var inst_26833 = (state_26835[2]);var state_26835__$1 = state_26835;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26835__$1,inst_26833);
} else
{if((state_val_26836 === 35))
{var inst_26817 = (state_26835[2]);var state_26835__$1 = state_26835;var statearr_26846_28569 = state_26835__$1;(statearr_26846_28569[2] = inst_26817);
(statearr_26846_28569[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26836 === 4))
{var inst_26707 = (state_26835[13]);var inst_26707__$1 = (state_26835[2]);var inst_26708 = (inst_26707__$1 == null);var state_26835__$1 = (function (){var statearr_26847 = state_26835;(statearr_26847[13] = inst_26707__$1);
return statearr_26847;
})();if(cljs.core.truth_(inst_26708))
{var statearr_26848_28570 = state_26835__$1;(statearr_26848_28570[1] = 5);
} else
{var statearr_26849_28571 = state_26835__$1;(statearr_26849_28571[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26836 === 36))
{var inst_26794 = (state_26835[12]);var inst_26798 = cljs.core.chunk_first.call(null,inst_26794);var inst_26799 = cljs.core.chunk_rest.call(null,inst_26794);var inst_26800 = cljs.core.count.call(null,inst_26798);var inst_26775 = inst_26799;var inst_26776 = inst_26798;var inst_26777 = inst_26800;var inst_26778 = 0;var state_26835__$1 = (function (){var statearr_26850 = state_26835;(statearr_26850[7] = inst_26778);
(statearr_26850[8] = inst_26777);
(statearr_26850[9] = inst_26776);
(statearr_26850[10] = inst_26775);
return statearr_26850;
})();var statearr_26851_28572 = state_26835__$1;(statearr_26851_28572[2] = null);
(statearr_26851_28572[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26836 === 5))
{var inst_26714 = cljs.core.deref.call(null,cs);var inst_26715 = cljs.core.seq.call(null,inst_26714);var inst_26716 = inst_26715;var inst_26717 = null;var inst_26718 = 0;var inst_26719 = 0;var state_26835__$1 = (function (){var statearr_26852 = state_26835;(statearr_26852[14] = inst_26718);
(statearr_26852[15] = inst_26717);
(statearr_26852[16] = inst_26719);
(statearr_26852[17] = inst_26716);
return statearr_26852;
})();var statearr_26853_28573 = state_26835__$1;(statearr_26853_28573[2] = null);
(statearr_26853_28573[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26836 === 37))
{var inst_26794 = (state_26835[12]);var inst_26803 = (state_26835[18]);var inst_26707 = (state_26835[13]);var inst_26803__$1 = cljs.core.first.call(null,inst_26794);var inst_26804 = cljs.core.async.put_BANG_.call(null,inst_26803__$1,inst_26707,done);var state_26835__$1 = (function (){var statearr_26854 = state_26835;(statearr_26854[18] = inst_26803__$1);
return statearr_26854;
})();if(cljs.core.truth_(inst_26804))
{var statearr_26855_28574 = state_26835__$1;(statearr_26855_28574[1] = 39);
} else
{var statearr_26856_28575 = state_26835__$1;(statearr_26856_28575[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26836 === 6))
{var inst_26767 = (state_26835[19]);var inst_26766 = cljs.core.deref.call(null,cs);var inst_26767__$1 = cljs.core.keys.call(null,inst_26766);var inst_26768 = cljs.core.count.call(null,inst_26767__$1);var inst_26769 = cljs.core.reset_BANG_.call(null,dctr,inst_26768);var inst_26774 = cljs.core.seq.call(null,inst_26767__$1);var inst_26775 = inst_26774;var inst_26776 = null;var inst_26777 = 0;var inst_26778 = 0;var state_26835__$1 = (function (){var statearr_26857 = state_26835;(statearr_26857[7] = inst_26778);
(statearr_26857[8] = inst_26777);
(statearr_26857[20] = inst_26769);
(statearr_26857[9] = inst_26776);
(statearr_26857[10] = inst_26775);
(statearr_26857[19] = inst_26767__$1);
return statearr_26857;
})();var statearr_26858_28576 = state_26835__$1;(statearr_26858_28576[2] = null);
(statearr_26858_28576[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26836 === 38))
{var inst_26814 = (state_26835[2]);var state_26835__$1 = state_26835;var statearr_26859_28577 = state_26835__$1;(statearr_26859_28577[2] = inst_26814);
(statearr_26859_28577[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26836 === 7))
{var inst_26831 = (state_26835[2]);var state_26835__$1 = state_26835;var statearr_26860_28578 = state_26835__$1;(statearr_26860_28578[2] = inst_26831);
(statearr_26860_28578[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26836 === 39))
{var state_26835__$1 = state_26835;var statearr_26861_28579 = state_26835__$1;(statearr_26861_28579[2] = null);
(statearr_26861_28579[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26836 === 8))
{var inst_26718 = (state_26835[14]);var inst_26719 = (state_26835[16]);var inst_26721 = (inst_26719 < inst_26718);var inst_26722 = inst_26721;var state_26835__$1 = state_26835;if(cljs.core.truth_(inst_26722))
{var statearr_26862_28580 = state_26835__$1;(statearr_26862_28580[1] = 10);
} else
{var statearr_26863_28581 = state_26835__$1;(statearr_26863_28581[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26836 === 40))
{var inst_26803 = (state_26835[18]);var inst_26807 = done.call(null,null);var inst_26808 = cljs.core.async.untap_STAR_.call(null,m,inst_26803);var state_26835__$1 = (function (){var statearr_26864 = state_26835;(statearr_26864[21] = inst_26807);
return statearr_26864;
})();var statearr_26865_28582 = state_26835__$1;(statearr_26865_28582[2] = inst_26808);
(statearr_26865_28582[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26836 === 9))
{var inst_26764 = (state_26835[2]);var state_26835__$1 = state_26835;var statearr_26866_28583 = state_26835__$1;(statearr_26866_28583[2] = inst_26764);
(statearr_26866_28583[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26836 === 41))
{var inst_26794 = (state_26835[12]);var inst_26810 = (state_26835[2]);var inst_26811 = cljs.core.next.call(null,inst_26794);var inst_26775 = inst_26811;var inst_26776 = null;var inst_26777 = 0;var inst_26778 = 0;var state_26835__$1 = (function (){var statearr_26867 = state_26835;(statearr_26867[7] = inst_26778);
(statearr_26867[8] = inst_26777);
(statearr_26867[22] = inst_26810);
(statearr_26867[9] = inst_26776);
(statearr_26867[10] = inst_26775);
return statearr_26867;
})();var statearr_26868_28584 = state_26835__$1;(statearr_26868_28584[2] = null);
(statearr_26868_28584[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26836 === 10))
{var inst_26717 = (state_26835[15]);var inst_26719 = (state_26835[16]);var inst_26725 = cljs.core._nth.call(null,inst_26717,inst_26719);var inst_26726 = cljs.core.nth.call(null,inst_26725,0,null);var inst_26727 = cljs.core.nth.call(null,inst_26725,1,null);var state_26835__$1 = (function (){var statearr_26869 = state_26835;(statearr_26869[23] = inst_26726);
return statearr_26869;
})();if(cljs.core.truth_(inst_26727))
{var statearr_26870_28585 = state_26835__$1;(statearr_26870_28585[1] = 13);
} else
{var statearr_26871_28586 = state_26835__$1;(statearr_26871_28586[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26836 === 42))
{var state_26835__$1 = state_26835;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26835__$1,45,dchan);
} else
{if((state_val_26836 === 11))
{var inst_26736 = (state_26835[24]);var inst_26716 = (state_26835[17]);var inst_26736__$1 = cljs.core.seq.call(null,inst_26716);var state_26835__$1 = (function (){var statearr_26872 = state_26835;(statearr_26872[24] = inst_26736__$1);
return statearr_26872;
})();if(inst_26736__$1)
{var statearr_26873_28587 = state_26835__$1;(statearr_26873_28587[1] = 16);
} else
{var statearr_26874_28588 = state_26835__$1;(statearr_26874_28588[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26836 === 43))
{var state_26835__$1 = state_26835;var statearr_26875_28589 = state_26835__$1;(statearr_26875_28589[2] = null);
(statearr_26875_28589[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26836 === 12))
{var inst_26762 = (state_26835[2]);var state_26835__$1 = state_26835;var statearr_26876_28590 = state_26835__$1;(statearr_26876_28590[2] = inst_26762);
(statearr_26876_28590[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26836 === 44))
{var inst_26828 = (state_26835[2]);var state_26835__$1 = (function (){var statearr_26877 = state_26835;(statearr_26877[25] = inst_26828);
return statearr_26877;
})();var statearr_26878_28591 = state_26835__$1;(statearr_26878_28591[2] = null);
(statearr_26878_28591[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26836 === 13))
{var inst_26726 = (state_26835[23]);var inst_26729 = cljs.core.async.close_BANG_.call(null,inst_26726);var state_26835__$1 = state_26835;var statearr_26879_28592 = state_26835__$1;(statearr_26879_28592[2] = inst_26729);
(statearr_26879_28592[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26836 === 45))
{var inst_26825 = (state_26835[2]);var state_26835__$1 = state_26835;var statearr_26883_28593 = state_26835__$1;(statearr_26883_28593[2] = inst_26825);
(statearr_26883_28593[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26836 === 14))
{var state_26835__$1 = state_26835;var statearr_26884_28594 = state_26835__$1;(statearr_26884_28594[2] = null);
(statearr_26884_28594[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26836 === 15))
{var inst_26718 = (state_26835[14]);var inst_26717 = (state_26835[15]);var inst_26719 = (state_26835[16]);var inst_26716 = (state_26835[17]);var inst_26732 = (state_26835[2]);var inst_26733 = (inst_26719 + 1);var tmp26880 = inst_26718;var tmp26881 = inst_26717;var tmp26882 = inst_26716;var inst_26716__$1 = tmp26882;var inst_26717__$1 = tmp26881;var inst_26718__$1 = tmp26880;var inst_26719__$1 = inst_26733;var state_26835__$1 = (function (){var statearr_26885 = state_26835;(statearr_26885[14] = inst_26718__$1);
(statearr_26885[15] = inst_26717__$1);
(statearr_26885[16] = inst_26719__$1);
(statearr_26885[26] = inst_26732);
(statearr_26885[17] = inst_26716__$1);
return statearr_26885;
})();var statearr_26886_28595 = state_26835__$1;(statearr_26886_28595[2] = null);
(statearr_26886_28595[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26836 === 16))
{var inst_26736 = (state_26835[24]);var inst_26738 = cljs.core.chunked_seq_QMARK_.call(null,inst_26736);var state_26835__$1 = state_26835;if(inst_26738)
{var statearr_26887_28596 = state_26835__$1;(statearr_26887_28596[1] = 19);
} else
{var statearr_26888_28597 = state_26835__$1;(statearr_26888_28597[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26836 === 17))
{var state_26835__$1 = state_26835;var statearr_26889_28598 = state_26835__$1;(statearr_26889_28598[2] = null);
(statearr_26889_28598[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26836 === 18))
{var inst_26760 = (state_26835[2]);var state_26835__$1 = state_26835;var statearr_26890_28599 = state_26835__$1;(statearr_26890_28599[2] = inst_26760);
(statearr_26890_28599[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26836 === 19))
{var inst_26736 = (state_26835[24]);var inst_26740 = cljs.core.chunk_first.call(null,inst_26736);var inst_26741 = cljs.core.chunk_rest.call(null,inst_26736);var inst_26742 = cljs.core.count.call(null,inst_26740);var inst_26716 = inst_26741;var inst_26717 = inst_26740;var inst_26718 = inst_26742;var inst_26719 = 0;var state_26835__$1 = (function (){var statearr_26891 = state_26835;(statearr_26891[14] = inst_26718);
(statearr_26891[15] = inst_26717);
(statearr_26891[16] = inst_26719);
(statearr_26891[17] = inst_26716);
return statearr_26891;
})();var statearr_26892_28600 = state_26835__$1;(statearr_26892_28600[2] = null);
(statearr_26892_28600[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26836 === 20))
{var inst_26736 = (state_26835[24]);var inst_26746 = cljs.core.first.call(null,inst_26736);var inst_26747 = cljs.core.nth.call(null,inst_26746,0,null);var inst_26748 = cljs.core.nth.call(null,inst_26746,1,null);var state_26835__$1 = (function (){var statearr_26893 = state_26835;(statearr_26893[27] = inst_26747);
return statearr_26893;
})();if(cljs.core.truth_(inst_26748))
{var statearr_26894_28601 = state_26835__$1;(statearr_26894_28601[1] = 22);
} else
{var statearr_26895_28602 = state_26835__$1;(statearr_26895_28602[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26836 === 21))
{var inst_26757 = (state_26835[2]);var state_26835__$1 = state_26835;var statearr_26896_28603 = state_26835__$1;(statearr_26896_28603[2] = inst_26757);
(statearr_26896_28603[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26836 === 22))
{var inst_26747 = (state_26835[27]);var inst_26750 = cljs.core.async.close_BANG_.call(null,inst_26747);var state_26835__$1 = state_26835;var statearr_26897_28604 = state_26835__$1;(statearr_26897_28604[2] = inst_26750);
(statearr_26897_28604[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26836 === 23))
{var state_26835__$1 = state_26835;var statearr_26898_28605 = state_26835__$1;(statearr_26898_28605[2] = null);
(statearr_26898_28605[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26836 === 24))
{var inst_26736 = (state_26835[24]);var inst_26753 = (state_26835[2]);var inst_26754 = cljs.core.next.call(null,inst_26736);var inst_26716 = inst_26754;var inst_26717 = null;var inst_26718 = 0;var inst_26719 = 0;var state_26835__$1 = (function (){var statearr_26899 = state_26835;(statearr_26899[14] = inst_26718);
(statearr_26899[15] = inst_26717);
(statearr_26899[16] = inst_26719);
(statearr_26899[28] = inst_26753);
(statearr_26899[17] = inst_26716);
return statearr_26899;
})();var statearr_26900_28606 = state_26835__$1;(statearr_26900_28606[2] = null);
(statearr_26900_28606[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26836 === 25))
{var inst_26778 = (state_26835[7]);var inst_26777 = (state_26835[8]);var inst_26780 = (inst_26778 < inst_26777);var inst_26781 = inst_26780;var state_26835__$1 = state_26835;if(cljs.core.truth_(inst_26781))
{var statearr_26901_28607 = state_26835__$1;(statearr_26901_28607[1] = 27);
} else
{var statearr_26902_28608 = state_26835__$1;(statearr_26902_28608[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26836 === 26))
{var inst_26767 = (state_26835[19]);var inst_26821 = (state_26835[2]);var inst_26822 = cljs.core.seq.call(null,inst_26767);var state_26835__$1 = (function (){var statearr_26903 = state_26835;(statearr_26903[29] = inst_26821);
return statearr_26903;
})();if(inst_26822)
{var statearr_26904_28609 = state_26835__$1;(statearr_26904_28609[1] = 42);
} else
{var statearr_26905_28610 = state_26835__$1;(statearr_26905_28610[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26836 === 27))
{var inst_26783 = (state_26835[30]);var inst_26778 = (state_26835[7]);var inst_26776 = (state_26835[9]);var inst_26707 = (state_26835[13]);var inst_26783__$1 = cljs.core._nth.call(null,inst_26776,inst_26778);var inst_26784 = cljs.core.async.put_BANG_.call(null,inst_26783__$1,inst_26707,done);var state_26835__$1 = (function (){var statearr_26906 = state_26835;(statearr_26906[30] = inst_26783__$1);
return statearr_26906;
})();if(cljs.core.truth_(inst_26784))
{var statearr_26907_28611 = state_26835__$1;(statearr_26907_28611[1] = 30);
} else
{var statearr_26908_28612 = state_26835__$1;(statearr_26908_28612[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26836 === 28))
{var inst_26794 = (state_26835[12]);var inst_26775 = (state_26835[10]);var inst_26794__$1 = cljs.core.seq.call(null,inst_26775);var state_26835__$1 = (function (){var statearr_26909 = state_26835;(statearr_26909[12] = inst_26794__$1);
return statearr_26909;
})();if(inst_26794__$1)
{var statearr_26910_28613 = state_26835__$1;(statearr_26910_28613[1] = 33);
} else
{var statearr_26911_28614 = state_26835__$1;(statearr_26911_28614[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26836 === 29))
{var inst_26819 = (state_26835[2]);var state_26835__$1 = state_26835;var statearr_26912_28615 = state_26835__$1;(statearr_26912_28615[2] = inst_26819);
(statearr_26912_28615[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26836 === 30))
{var state_26835__$1 = state_26835;var statearr_26913_28616 = state_26835__$1;(statearr_26913_28616[2] = null);
(statearr_26913_28616[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26836 === 31))
{var inst_26783 = (state_26835[30]);var inst_26787 = done.call(null,null);var inst_26788 = cljs.core.async.untap_STAR_.call(null,m,inst_26783);var state_26835__$1 = (function (){var statearr_26914 = state_26835;(statearr_26914[31] = inst_26787);
return statearr_26914;
})();var statearr_26915_28617 = state_26835__$1;(statearr_26915_28617[2] = inst_26788);
(statearr_26915_28617[1] = 32);
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
});})(c__22577__auto___28563,cs,m,dchan,dctr,done))
;return ((function (switch__22501__auto__,c__22577__auto___28563,cs,m,dchan,dctr,done){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_26919 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26919[0] = state_machine__22502__auto__);
(statearr_26919[1] = 1);
return statearr_26919;
});
var state_machine__22502__auto____1 = (function (state_26835){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_26835);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e26920){if((e26920 instanceof Object))
{var ex__22505__auto__ = e26920;var statearr_26921_28618 = state_26835;(statearr_26921_28618[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26835);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26920;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28619 = state_26835;
state_26835 = G__28619;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_26835){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_26835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto___28563,cs,m,dchan,dctr,done))
})();var state__22579__auto__ = (function (){var statearr_26922 = f__22578__auto__.call(null);(statearr_26922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28563);
return statearr_26922;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___28563,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj26924 = {};return obj26924;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__19791__auto__ = m;if(and__19791__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__20430__auto__ = (((m == null))?null:m);return (function (){var or__19803__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__19791__auto__ = m;if(and__19791__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__20430__auto__ = (((m == null))?null:m);return (function (){var or__19803__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__19791__auto__ = m;if(and__19791__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__20430__auto__ = (((m == null))?null:m);return (function (){var or__19803__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__19791__auto__ = m;if(and__19791__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__20430__auto__ = (((m == null))?null:m);return (function (){var or__19803__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__19791__auto__ = m;if(and__19791__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__20430__auto__ = (((m == null))?null:m);return (function (){var or__19803__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t27044 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27044 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta27045){
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
this.meta27045 = meta27045;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27044.cljs$lang$type = true;
cljs.core.async.t27044.cljs$lang$ctorStr = "cljs.core.async/t27044";
cljs.core.async.t27044.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27044");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27044.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t27044.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27044.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27044.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27044.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27044.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27044.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27044.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27044.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27046){var self__ = this;
var _27046__$1 = this;return self__.meta27045;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27046,meta27045__$1){var self__ = this;
var _27046__$1 = this;return (new cljs.core.async.t27044(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta27045__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t27044 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t27044(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta27045){return (new cljs.core.async.t27044(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta27045));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t27044(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__22577__auto___28620 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___28620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto___28620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27116){var state_val_27117 = (state_27116[1]);if((state_val_27117 === 1))
{var inst_27050 = (state_27116[7]);var inst_27050__$1 = calc_state.call(null);var inst_27051 = cljs.core.seq_QMARK_.call(null,inst_27050__$1);var state_27116__$1 = (function (){var statearr_27118 = state_27116;(statearr_27118[7] = inst_27050__$1);
return statearr_27118;
})();if(inst_27051)
{var statearr_27119_28621 = state_27116__$1;(statearr_27119_28621[1] = 2);
} else
{var statearr_27120_28622 = state_27116__$1;(statearr_27120_28622[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27117 === 2))
{var inst_27050 = (state_27116[7]);var inst_27053 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27050);var state_27116__$1 = state_27116;var statearr_27121_28623 = state_27116__$1;(statearr_27121_28623[2] = inst_27053);
(statearr_27121_28623[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27117 === 3))
{var inst_27050 = (state_27116[7]);var state_27116__$1 = state_27116;var statearr_27122_28624 = state_27116__$1;(statearr_27122_28624[2] = inst_27050);
(statearr_27122_28624[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27117 === 4))
{var inst_27050 = (state_27116[7]);var inst_27056 = (state_27116[2]);var inst_27057 = cljs.core.get.call(null,inst_27056,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_27058 = cljs.core.get.call(null,inst_27056,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_27059 = cljs.core.get.call(null,inst_27056,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_27060 = inst_27050;var state_27116__$1 = (function (){var statearr_27123 = state_27116;(statearr_27123[8] = inst_27060);
(statearr_27123[9] = inst_27059);
(statearr_27123[10] = inst_27057);
(statearr_27123[11] = inst_27058);
return statearr_27123;
})();var statearr_27124_28625 = state_27116__$1;(statearr_27124_28625[2] = null);
(statearr_27124_28625[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27117 === 5))
{var inst_27060 = (state_27116[8]);var inst_27063 = cljs.core.seq_QMARK_.call(null,inst_27060);var state_27116__$1 = state_27116;if(inst_27063)
{var statearr_27125_28626 = state_27116__$1;(statearr_27125_28626[1] = 7);
} else
{var statearr_27126_28627 = state_27116__$1;(statearr_27126_28627[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27117 === 6))
{var inst_27114 = (state_27116[2]);var state_27116__$1 = state_27116;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27116__$1,inst_27114);
} else
{if((state_val_27117 === 7))
{var inst_27060 = (state_27116[8]);var inst_27065 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27060);var state_27116__$1 = state_27116;var statearr_27127_28628 = state_27116__$1;(statearr_27127_28628[2] = inst_27065);
(statearr_27127_28628[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27117 === 8))
{var inst_27060 = (state_27116[8]);var state_27116__$1 = state_27116;var statearr_27128_28629 = state_27116__$1;(statearr_27128_28629[2] = inst_27060);
(statearr_27128_28629[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27117 === 9))
{var inst_27068 = (state_27116[12]);var inst_27068__$1 = (state_27116[2]);var inst_27069 = cljs.core.get.call(null,inst_27068__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_27070 = cljs.core.get.call(null,inst_27068__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_27071 = cljs.core.get.call(null,inst_27068__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_27116__$1 = (function (){var statearr_27129 = state_27116;(statearr_27129[13] = inst_27070);
(statearr_27129[14] = inst_27071);
(statearr_27129[12] = inst_27068__$1);
return statearr_27129;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27116__$1,10,inst_27069);
} else
{if((state_val_27117 === 10))
{var inst_27076 = (state_27116[15]);var inst_27075 = (state_27116[16]);var inst_27074 = (state_27116[2]);var inst_27075__$1 = cljs.core.nth.call(null,inst_27074,0,null);var inst_27076__$1 = cljs.core.nth.call(null,inst_27074,1,null);var inst_27077 = (inst_27075__$1 == null);var inst_27078 = cljs.core._EQ_.call(null,inst_27076__$1,change);var inst_27079 = (inst_27077) || (inst_27078);var state_27116__$1 = (function (){var statearr_27130 = state_27116;(statearr_27130[15] = inst_27076__$1);
(statearr_27130[16] = inst_27075__$1);
return statearr_27130;
})();if(cljs.core.truth_(inst_27079))
{var statearr_27131_28630 = state_27116__$1;(statearr_27131_28630[1] = 11);
} else
{var statearr_27132_28631 = state_27116__$1;(statearr_27132_28631[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27117 === 11))
{var inst_27075 = (state_27116[16]);var inst_27081 = (inst_27075 == null);var state_27116__$1 = state_27116;if(cljs.core.truth_(inst_27081))
{var statearr_27133_28632 = state_27116__$1;(statearr_27133_28632[1] = 14);
} else
{var statearr_27134_28633 = state_27116__$1;(statearr_27134_28633[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27117 === 12))
{var inst_27076 = (state_27116[15]);var inst_27090 = (state_27116[17]);var inst_27071 = (state_27116[14]);var inst_27090__$1 = inst_27071.call(null,inst_27076);var state_27116__$1 = (function (){var statearr_27135 = state_27116;(statearr_27135[17] = inst_27090__$1);
return statearr_27135;
})();if(cljs.core.truth_(inst_27090__$1))
{var statearr_27136_28634 = state_27116__$1;(statearr_27136_28634[1] = 17);
} else
{var statearr_27137_28635 = state_27116__$1;(statearr_27137_28635[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27117 === 13))
{var inst_27112 = (state_27116[2]);var state_27116__$1 = state_27116;var statearr_27138_28636 = state_27116__$1;(statearr_27138_28636[2] = inst_27112);
(statearr_27138_28636[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27117 === 14))
{var inst_27076 = (state_27116[15]);var inst_27083 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27076);var state_27116__$1 = state_27116;var statearr_27139_28637 = state_27116__$1;(statearr_27139_28637[2] = inst_27083);
(statearr_27139_28637[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27117 === 15))
{var state_27116__$1 = state_27116;var statearr_27140_28638 = state_27116__$1;(statearr_27140_28638[2] = null);
(statearr_27140_28638[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27117 === 16))
{var inst_27086 = (state_27116[2]);var inst_27087 = calc_state.call(null);var inst_27060 = inst_27087;var state_27116__$1 = (function (){var statearr_27141 = state_27116;(statearr_27141[8] = inst_27060);
(statearr_27141[18] = inst_27086);
return statearr_27141;
})();var statearr_27142_28639 = state_27116__$1;(statearr_27142_28639[2] = null);
(statearr_27142_28639[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27117 === 17))
{var inst_27090 = (state_27116[17]);var state_27116__$1 = state_27116;var statearr_27143_28640 = state_27116__$1;(statearr_27143_28640[2] = inst_27090);
(statearr_27143_28640[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27117 === 18))
{var inst_27076 = (state_27116[15]);var inst_27070 = (state_27116[13]);var inst_27071 = (state_27116[14]);var inst_27093 = cljs.core.empty_QMARK_.call(null,inst_27071);var inst_27094 = inst_27070.call(null,inst_27076);var inst_27095 = cljs.core.not.call(null,inst_27094);var inst_27096 = (inst_27093) && (inst_27095);var state_27116__$1 = state_27116;var statearr_27144_28641 = state_27116__$1;(statearr_27144_28641[2] = inst_27096);
(statearr_27144_28641[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27117 === 19))
{var inst_27098 = (state_27116[2]);var state_27116__$1 = state_27116;if(cljs.core.truth_(inst_27098))
{var statearr_27145_28642 = state_27116__$1;(statearr_27145_28642[1] = 20);
} else
{var statearr_27146_28643 = state_27116__$1;(statearr_27146_28643[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27117 === 20))
{var inst_27075 = (state_27116[16]);var state_27116__$1 = state_27116;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27116__$1,23,out,inst_27075);
} else
{if((state_val_27117 === 21))
{var inst_27068 = (state_27116[12]);var inst_27060 = inst_27068;var state_27116__$1 = (function (){var statearr_27147 = state_27116;(statearr_27147[8] = inst_27060);
return statearr_27147;
})();var statearr_27148_28644 = state_27116__$1;(statearr_27148_28644[2] = null);
(statearr_27148_28644[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27117 === 22))
{var inst_27110 = (state_27116[2]);var state_27116__$1 = state_27116;var statearr_27149_28645 = state_27116__$1;(statearr_27149_28645[2] = inst_27110);
(statearr_27149_28645[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27117 === 23))
{var inst_27101 = (state_27116[2]);var state_27116__$1 = state_27116;if(cljs.core.truth_(inst_27101))
{var statearr_27150_28646 = state_27116__$1;(statearr_27150_28646[1] = 24);
} else
{var statearr_27151_28647 = state_27116__$1;(statearr_27151_28647[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27117 === 24))
{var inst_27068 = (state_27116[12]);var inst_27060 = inst_27068;var state_27116__$1 = (function (){var statearr_27152 = state_27116;(statearr_27152[8] = inst_27060);
return statearr_27152;
})();var statearr_27153_28648 = state_27116__$1;(statearr_27153_28648[2] = null);
(statearr_27153_28648[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27117 === 25))
{var state_27116__$1 = state_27116;var statearr_27154_28649 = state_27116__$1;(statearr_27154_28649[2] = null);
(statearr_27154_28649[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27117 === 26))
{var inst_27106 = (state_27116[2]);var state_27116__$1 = state_27116;var statearr_27155_28650 = state_27116__$1;(statearr_27155_28650[2] = inst_27106);
(statearr_27155_28650[1] = 22);
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
});})(c__22577__auto___28620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__22501__auto__,c__22577__auto___28620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_27159 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27159[0] = state_machine__22502__auto__);
(statearr_27159[1] = 1);
return statearr_27159;
});
var state_machine__22502__auto____1 = (function (state_27116){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_27116);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e27160){if((e27160 instanceof Object))
{var ex__22505__auto__ = e27160;var statearr_27161_28651 = state_27116;(statearr_27161_28651[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27116);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27160;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28652 = state_27116;
state_27116 = G__28652;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_27116){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_27116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto___28620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__22579__auto__ = (function (){var statearr_27162 = f__22578__auto__.call(null);(statearr_27162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28620);
return statearr_27162;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___28620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj27164 = {};return obj27164;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__19791__auto__ = p;if(and__19791__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__19791__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__20430__auto__ = (((p == null))?null:p);return (function (){var or__19803__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__19791__auto__ = p;if(and__19791__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__19791__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__20430__auto__ = (((p == null))?null:p);return (function (){var or__19803__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__19791__auto__ = p;if(and__19791__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__20430__auto__ = (((p == null))?null:p);return (function (){var or__19803__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__19791__auto__ = p;if(and__19791__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__20430__auto__ = (((p == null))?null:p);return (function (){var or__19803__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
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
return (function (topic){var or__19803__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__19803__auto__,mults){
return (function (p1__27165_SHARP_){if(cljs.core.truth_(p1__27165_SHARP_.call(null,topic)))
{return p1__27165_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__27165_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__19803__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t27288 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27288 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta27289){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta27289 = meta27289;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27288.cljs$lang$type = true;
cljs.core.async.t27288.cljs$lang$ctorStr = "cljs.core.async/t27288";
cljs.core.async.t27288.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27288");
});})(mults,ensure_mult))
;
cljs.core.async.t27288.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t27288.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t27288.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t27288.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t27288.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t27288.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27288.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t27288.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27290){var self__ = this;
var _27290__$1 = this;return self__.meta27289;
});})(mults,ensure_mult))
;
cljs.core.async.t27288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27290,meta27289__$1){var self__ = this;
var _27290__$1 = this;return (new cljs.core.async.t27288(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta27289__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t27288 = ((function (mults,ensure_mult){
return (function __GT_t27288(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27289){return (new cljs.core.async.t27288(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27289));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t27288(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__22577__auto___28653 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___28653,mults,ensure_mult,p){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto___28653,mults,ensure_mult,p){
return (function (state_27362){var state_val_27363 = (state_27362[1]);if((state_val_27363 === 1))
{var state_27362__$1 = state_27362;var statearr_27364_28654 = state_27362__$1;(statearr_27364_28654[2] = null);
(statearr_27364_28654[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27363 === 2))
{var state_27362__$1 = state_27362;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27362__$1,4,ch);
} else
{if((state_val_27363 === 3))
{var inst_27360 = (state_27362[2]);var state_27362__$1 = state_27362;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27362__$1,inst_27360);
} else
{if((state_val_27363 === 4))
{var inst_27293 = (state_27362[7]);var inst_27293__$1 = (state_27362[2]);var inst_27294 = (inst_27293__$1 == null);var state_27362__$1 = (function (){var statearr_27365 = state_27362;(statearr_27365[7] = inst_27293__$1);
return statearr_27365;
})();if(cljs.core.truth_(inst_27294))
{var statearr_27366_28655 = state_27362__$1;(statearr_27366_28655[1] = 5);
} else
{var statearr_27367_28656 = state_27362__$1;(statearr_27367_28656[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27363 === 5))
{var inst_27300 = cljs.core.deref.call(null,mults);var inst_27301 = cljs.core.vals.call(null,inst_27300);var inst_27302 = cljs.core.seq.call(null,inst_27301);var inst_27303 = inst_27302;var inst_27304 = null;var inst_27305 = 0;var inst_27306 = 0;var state_27362__$1 = (function (){var statearr_27368 = state_27362;(statearr_27368[8] = inst_27306);
(statearr_27368[9] = inst_27305);
(statearr_27368[10] = inst_27304);
(statearr_27368[11] = inst_27303);
return statearr_27368;
})();var statearr_27369_28657 = state_27362__$1;(statearr_27369_28657[2] = null);
(statearr_27369_28657[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27363 === 6))
{var inst_27293 = (state_27362[7]);var inst_27343 = (state_27362[12]);var inst_27341 = (state_27362[13]);var inst_27341__$1 = topic_fn.call(null,inst_27293);var inst_27342 = cljs.core.deref.call(null,mults);var inst_27343__$1 = cljs.core.get.call(null,inst_27342,inst_27341__$1);var state_27362__$1 = (function (){var statearr_27370 = state_27362;(statearr_27370[12] = inst_27343__$1);
(statearr_27370[13] = inst_27341__$1);
return statearr_27370;
})();if(cljs.core.truth_(inst_27343__$1))
{var statearr_27371_28658 = state_27362__$1;(statearr_27371_28658[1] = 19);
} else
{var statearr_27372_28659 = state_27362__$1;(statearr_27372_28659[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27363 === 7))
{var inst_27358 = (state_27362[2]);var state_27362__$1 = state_27362;var statearr_27373_28660 = state_27362__$1;(statearr_27373_28660[2] = inst_27358);
(statearr_27373_28660[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27363 === 8))
{var inst_27306 = (state_27362[8]);var inst_27305 = (state_27362[9]);var inst_27308 = (inst_27306 < inst_27305);var inst_27309 = inst_27308;var state_27362__$1 = state_27362;if(cljs.core.truth_(inst_27309))
{var statearr_27377_28661 = state_27362__$1;(statearr_27377_28661[1] = 10);
} else
{var statearr_27378_28662 = state_27362__$1;(statearr_27378_28662[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27363 === 9))
{var inst_27339 = (state_27362[2]);var state_27362__$1 = state_27362;var statearr_27379_28663 = state_27362__$1;(statearr_27379_28663[2] = inst_27339);
(statearr_27379_28663[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27363 === 10))
{var inst_27306 = (state_27362[8]);var inst_27305 = (state_27362[9]);var inst_27304 = (state_27362[10]);var inst_27303 = (state_27362[11]);var inst_27311 = cljs.core._nth.call(null,inst_27304,inst_27306);var inst_27312 = cljs.core.async.muxch_STAR_.call(null,inst_27311);var inst_27313 = cljs.core.async.close_BANG_.call(null,inst_27312);var inst_27314 = (inst_27306 + 1);var tmp27374 = inst_27305;var tmp27375 = inst_27304;var tmp27376 = inst_27303;var inst_27303__$1 = tmp27376;var inst_27304__$1 = tmp27375;var inst_27305__$1 = tmp27374;var inst_27306__$1 = inst_27314;var state_27362__$1 = (function (){var statearr_27380 = state_27362;(statearr_27380[14] = inst_27313);
(statearr_27380[8] = inst_27306__$1);
(statearr_27380[9] = inst_27305__$1);
(statearr_27380[10] = inst_27304__$1);
(statearr_27380[11] = inst_27303__$1);
return statearr_27380;
})();var statearr_27381_28664 = state_27362__$1;(statearr_27381_28664[2] = null);
(statearr_27381_28664[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27363 === 11))
{var inst_27317 = (state_27362[15]);var inst_27303 = (state_27362[11]);var inst_27317__$1 = cljs.core.seq.call(null,inst_27303);var state_27362__$1 = (function (){var statearr_27382 = state_27362;(statearr_27382[15] = inst_27317__$1);
return statearr_27382;
})();if(inst_27317__$1)
{var statearr_27383_28665 = state_27362__$1;(statearr_27383_28665[1] = 13);
} else
{var statearr_27384_28666 = state_27362__$1;(statearr_27384_28666[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27363 === 12))
{var inst_27337 = (state_27362[2]);var state_27362__$1 = state_27362;var statearr_27385_28667 = state_27362__$1;(statearr_27385_28667[2] = inst_27337);
(statearr_27385_28667[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27363 === 13))
{var inst_27317 = (state_27362[15]);var inst_27319 = cljs.core.chunked_seq_QMARK_.call(null,inst_27317);var state_27362__$1 = state_27362;if(inst_27319)
{var statearr_27386_28668 = state_27362__$1;(statearr_27386_28668[1] = 16);
} else
{var statearr_27387_28669 = state_27362__$1;(statearr_27387_28669[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27363 === 14))
{var state_27362__$1 = state_27362;var statearr_27388_28670 = state_27362__$1;(statearr_27388_28670[2] = null);
(statearr_27388_28670[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27363 === 15))
{var inst_27335 = (state_27362[2]);var state_27362__$1 = state_27362;var statearr_27389_28671 = state_27362__$1;(statearr_27389_28671[2] = inst_27335);
(statearr_27389_28671[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27363 === 16))
{var inst_27317 = (state_27362[15]);var inst_27321 = cljs.core.chunk_first.call(null,inst_27317);var inst_27322 = cljs.core.chunk_rest.call(null,inst_27317);var inst_27323 = cljs.core.count.call(null,inst_27321);var inst_27303 = inst_27322;var inst_27304 = inst_27321;var inst_27305 = inst_27323;var inst_27306 = 0;var state_27362__$1 = (function (){var statearr_27390 = state_27362;(statearr_27390[8] = inst_27306);
(statearr_27390[9] = inst_27305);
(statearr_27390[10] = inst_27304);
(statearr_27390[11] = inst_27303);
return statearr_27390;
})();var statearr_27391_28672 = state_27362__$1;(statearr_27391_28672[2] = null);
(statearr_27391_28672[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27363 === 17))
{var inst_27317 = (state_27362[15]);var inst_27326 = cljs.core.first.call(null,inst_27317);var inst_27327 = cljs.core.async.muxch_STAR_.call(null,inst_27326);var inst_27328 = cljs.core.async.close_BANG_.call(null,inst_27327);var inst_27329 = cljs.core.next.call(null,inst_27317);var inst_27303 = inst_27329;var inst_27304 = null;var inst_27305 = 0;var inst_27306 = 0;var state_27362__$1 = (function (){var statearr_27392 = state_27362;(statearr_27392[16] = inst_27328);
(statearr_27392[8] = inst_27306);
(statearr_27392[9] = inst_27305);
(statearr_27392[10] = inst_27304);
(statearr_27392[11] = inst_27303);
return statearr_27392;
})();var statearr_27393_28673 = state_27362__$1;(statearr_27393_28673[2] = null);
(statearr_27393_28673[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27363 === 18))
{var inst_27332 = (state_27362[2]);var state_27362__$1 = state_27362;var statearr_27394_28674 = state_27362__$1;(statearr_27394_28674[2] = inst_27332);
(statearr_27394_28674[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27363 === 19))
{var inst_27293 = (state_27362[7]);var inst_27343 = (state_27362[12]);var inst_27345 = cljs.core.async.muxch_STAR_.call(null,inst_27343);var state_27362__$1 = state_27362;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27362__$1,22,inst_27345,inst_27293);
} else
{if((state_val_27363 === 20))
{var state_27362__$1 = state_27362;var statearr_27395_28675 = state_27362__$1;(statearr_27395_28675[2] = null);
(statearr_27395_28675[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27363 === 21))
{var inst_27355 = (state_27362[2]);var state_27362__$1 = (function (){var statearr_27396 = state_27362;(statearr_27396[17] = inst_27355);
return statearr_27396;
})();var statearr_27397_28676 = state_27362__$1;(statearr_27397_28676[2] = null);
(statearr_27397_28676[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27363 === 22))
{var inst_27347 = (state_27362[2]);var state_27362__$1 = state_27362;if(cljs.core.truth_(inst_27347))
{var statearr_27398_28677 = state_27362__$1;(statearr_27398_28677[1] = 23);
} else
{var statearr_27399_28678 = state_27362__$1;(statearr_27399_28678[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27363 === 23))
{var state_27362__$1 = state_27362;var statearr_27400_28679 = state_27362__$1;(statearr_27400_28679[2] = null);
(statearr_27400_28679[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27363 === 24))
{var inst_27341 = (state_27362[13]);var inst_27350 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27341);var state_27362__$1 = state_27362;var statearr_27401_28680 = state_27362__$1;(statearr_27401_28680[2] = inst_27350);
(statearr_27401_28680[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27363 === 25))
{var inst_27352 = (state_27362[2]);var state_27362__$1 = state_27362;var statearr_27402_28681 = state_27362__$1;(statearr_27402_28681[2] = inst_27352);
(statearr_27402_28681[1] = 21);
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
});})(c__22577__auto___28653,mults,ensure_mult,p))
;return ((function (switch__22501__auto__,c__22577__auto___28653,mults,ensure_mult,p){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_27406 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27406[0] = state_machine__22502__auto__);
(statearr_27406[1] = 1);
return statearr_27406;
});
var state_machine__22502__auto____1 = (function (state_27362){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_27362);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e27407){if((e27407 instanceof Object))
{var ex__22505__auto__ = e27407;var statearr_27408_28682 = state_27362;(statearr_27408_28682[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27362);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27407;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28683 = state_27362;
state_27362 = G__28683;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_27362){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_27362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto___28653,mults,ensure_mult,p))
})();var state__22579__auto__ = (function (){var statearr_27409 = f__22578__auto__.call(null);(statearr_27409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28653);
return statearr_27409;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___28653,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__22577__auto___28684 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___28684,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto___28684,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27516){var state_val_27517 = (state_27516[1]);if((state_val_27517 === 1))
{var state_27516__$1 = state_27516;var statearr_27518_28685 = state_27516__$1;(statearr_27518_28685[2] = null);
(statearr_27518_28685[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27517 === 2))
{var inst_27479 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_27480 = 0;var state_27516__$1 = (function (){var statearr_27519 = state_27516;(statearr_27519[7] = inst_27479);
(statearr_27519[8] = inst_27480);
return statearr_27519;
})();var statearr_27520_28686 = state_27516__$1;(statearr_27520_28686[2] = null);
(statearr_27520_28686[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27517 === 3))
{var inst_27514 = (state_27516[2]);var state_27516__$1 = state_27516;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27516__$1,inst_27514);
} else
{if((state_val_27517 === 4))
{var inst_27480 = (state_27516[8]);var inst_27482 = (inst_27480 < cnt);var state_27516__$1 = state_27516;if(cljs.core.truth_(inst_27482))
{var statearr_27521_28687 = state_27516__$1;(statearr_27521_28687[1] = 6);
} else
{var statearr_27522_28688 = state_27516__$1;(statearr_27522_28688[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27517 === 5))
{var inst_27500 = (state_27516[2]);var state_27516__$1 = (function (){var statearr_27523 = state_27516;(statearr_27523[9] = inst_27500);
return statearr_27523;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27516__$1,12,dchan);
} else
{if((state_val_27517 === 6))
{var state_27516__$1 = state_27516;var statearr_27524_28689 = state_27516__$1;(statearr_27524_28689[2] = null);
(statearr_27524_28689[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27517 === 7))
{var state_27516__$1 = state_27516;var statearr_27525_28690 = state_27516__$1;(statearr_27525_28690[2] = null);
(statearr_27525_28690[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27517 === 8))
{var inst_27498 = (state_27516[2]);var state_27516__$1 = state_27516;var statearr_27526_28691 = state_27516__$1;(statearr_27526_28691[2] = inst_27498);
(statearr_27526_28691[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27517 === 9))
{var inst_27480 = (state_27516[8]);var inst_27493 = (state_27516[2]);var inst_27494 = (inst_27480 + 1);var inst_27480__$1 = inst_27494;var state_27516__$1 = (function (){var statearr_27527 = state_27516;(statearr_27527[8] = inst_27480__$1);
(statearr_27527[10] = inst_27493);
return statearr_27527;
})();var statearr_27528_28692 = state_27516__$1;(statearr_27528_28692[2] = null);
(statearr_27528_28692[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27517 === 10))
{var inst_27484 = (state_27516[2]);var inst_27485 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_27516__$1 = (function (){var statearr_27529 = state_27516;(statearr_27529[11] = inst_27484);
return statearr_27529;
})();var statearr_27530_28693 = state_27516__$1;(statearr_27530_28693[2] = inst_27485);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27516__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27517 === 11))
{var inst_27480 = (state_27516[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27516,10,Object,null,9);var inst_27489 = chs__$1.call(null,inst_27480);var inst_27490 = done.call(null,inst_27480);var inst_27491 = cljs.core.async.take_BANG_.call(null,inst_27489,inst_27490);var state_27516__$1 = state_27516;var statearr_27531_28694 = state_27516__$1;(statearr_27531_28694[2] = inst_27491);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27516__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27517 === 12))
{var inst_27502 = (state_27516[12]);var inst_27502__$1 = (state_27516[2]);var inst_27503 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27502__$1);var state_27516__$1 = (function (){var statearr_27532 = state_27516;(statearr_27532[12] = inst_27502__$1);
return statearr_27532;
})();if(cljs.core.truth_(inst_27503))
{var statearr_27533_28695 = state_27516__$1;(statearr_27533_28695[1] = 13);
} else
{var statearr_27534_28696 = state_27516__$1;(statearr_27534_28696[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27517 === 13))
{var inst_27505 = cljs.core.async.close_BANG_.call(null,out);var state_27516__$1 = state_27516;var statearr_27535_28697 = state_27516__$1;(statearr_27535_28697[2] = inst_27505);
(statearr_27535_28697[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27517 === 14))
{var inst_27502 = (state_27516[12]);var inst_27507 = cljs.core.apply.call(null,f,inst_27502);var state_27516__$1 = state_27516;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27516__$1,16,out,inst_27507);
} else
{if((state_val_27517 === 15))
{var inst_27512 = (state_27516[2]);var state_27516__$1 = state_27516;var statearr_27536_28698 = state_27516__$1;(statearr_27536_28698[2] = inst_27512);
(statearr_27536_28698[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27517 === 16))
{var inst_27509 = (state_27516[2]);var state_27516__$1 = (function (){var statearr_27537 = state_27516;(statearr_27537[13] = inst_27509);
return statearr_27537;
})();var statearr_27538_28699 = state_27516__$1;(statearr_27538_28699[2] = null);
(statearr_27538_28699[1] = 2);
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
});})(c__22577__auto___28684,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__22501__auto__,c__22577__auto___28684,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_27542 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27542[0] = state_machine__22502__auto__);
(statearr_27542[1] = 1);
return statearr_27542;
});
var state_machine__22502__auto____1 = (function (state_27516){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_27516);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e27543){if((e27543 instanceof Object))
{var ex__22505__auto__ = e27543;var statearr_27544_28700 = state_27516;(statearr_27544_28700[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27516);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27543;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28701 = state_27516;
state_27516 = G__28701;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_27516){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_27516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto___28684,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__22579__auto__ = (function (){var statearr_27545 = f__22578__auto__.call(null);(statearr_27545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28684);
return statearr_27545;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___28684,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22577__auto___28702 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___28702,out){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto___28702,out){
return (function (state_27629){var state_val_27630 = (state_27629[1]);if((state_val_27630 === 1))
{var inst_27600 = cljs.core.vec.call(null,chs);var inst_27601 = inst_27600;var state_27629__$1 = (function (){var statearr_27631 = state_27629;(statearr_27631[7] = inst_27601);
return statearr_27631;
})();var statearr_27632_28703 = state_27629__$1;(statearr_27632_28703[2] = null);
(statearr_27632_28703[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27630 === 2))
{var inst_27601 = (state_27629[7]);var inst_27603 = cljs.core.count.call(null,inst_27601);var inst_27604 = (inst_27603 > 0);var state_27629__$1 = state_27629;if(cljs.core.truth_(inst_27604))
{var statearr_27633_28704 = state_27629__$1;(statearr_27633_28704[1] = 4);
} else
{var statearr_27634_28705 = state_27629__$1;(statearr_27634_28705[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27630 === 3))
{var inst_27627 = (state_27629[2]);var state_27629__$1 = state_27629;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27629__$1,inst_27627);
} else
{if((state_val_27630 === 4))
{var inst_27601 = (state_27629[7]);var state_27629__$1 = state_27629;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27629__$1,7,inst_27601);
} else
{if((state_val_27630 === 5))
{var inst_27623 = cljs.core.async.close_BANG_.call(null,out);var state_27629__$1 = state_27629;var statearr_27635_28706 = state_27629__$1;(statearr_27635_28706[2] = inst_27623);
(statearr_27635_28706[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27630 === 6))
{var inst_27625 = (state_27629[2]);var state_27629__$1 = state_27629;var statearr_27636_28707 = state_27629__$1;(statearr_27636_28707[2] = inst_27625);
(statearr_27636_28707[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27630 === 7))
{var inst_27609 = (state_27629[8]);var inst_27608 = (state_27629[9]);var inst_27608__$1 = (state_27629[2]);var inst_27609__$1 = cljs.core.nth.call(null,inst_27608__$1,0,null);var inst_27610 = cljs.core.nth.call(null,inst_27608__$1,1,null);var inst_27611 = (inst_27609__$1 == null);var state_27629__$1 = (function (){var statearr_27637 = state_27629;(statearr_27637[8] = inst_27609__$1);
(statearr_27637[9] = inst_27608__$1);
(statearr_27637[10] = inst_27610);
return statearr_27637;
})();if(cljs.core.truth_(inst_27611))
{var statearr_27638_28708 = state_27629__$1;(statearr_27638_28708[1] = 8);
} else
{var statearr_27639_28709 = state_27629__$1;(statearr_27639_28709[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27630 === 8))
{var inst_27609 = (state_27629[8]);var inst_27608 = (state_27629[9]);var inst_27601 = (state_27629[7]);var inst_27610 = (state_27629[10]);var inst_27613 = (function (){var c = inst_27610;var v = inst_27609;var vec__27606 = inst_27608;var cs = inst_27601;return ((function (c,v,vec__27606,cs,inst_27609,inst_27608,inst_27601,inst_27610,state_val_27630,c__22577__auto___28702,out){
return (function (p1__27546_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__27546_SHARP_);
});
;})(c,v,vec__27606,cs,inst_27609,inst_27608,inst_27601,inst_27610,state_val_27630,c__22577__auto___28702,out))
})();var inst_27614 = cljs.core.filterv.call(null,inst_27613,inst_27601);var inst_27601__$1 = inst_27614;var state_27629__$1 = (function (){var statearr_27640 = state_27629;(statearr_27640[7] = inst_27601__$1);
return statearr_27640;
})();var statearr_27641_28710 = state_27629__$1;(statearr_27641_28710[2] = null);
(statearr_27641_28710[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27630 === 9))
{var inst_27609 = (state_27629[8]);var state_27629__$1 = state_27629;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27629__$1,11,out,inst_27609);
} else
{if((state_val_27630 === 10))
{var inst_27621 = (state_27629[2]);var state_27629__$1 = state_27629;var statearr_27643_28711 = state_27629__$1;(statearr_27643_28711[2] = inst_27621);
(statearr_27643_28711[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27630 === 11))
{var inst_27601 = (state_27629[7]);var inst_27618 = (state_27629[2]);var tmp27642 = inst_27601;var inst_27601__$1 = tmp27642;var state_27629__$1 = (function (){var statearr_27644 = state_27629;(statearr_27644[7] = inst_27601__$1);
(statearr_27644[11] = inst_27618);
return statearr_27644;
})();var statearr_27645_28712 = state_27629__$1;(statearr_27645_28712[2] = null);
(statearr_27645_28712[1] = 2);
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
});})(c__22577__auto___28702,out))
;return ((function (switch__22501__auto__,c__22577__auto___28702,out){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_27649 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27649[0] = state_machine__22502__auto__);
(statearr_27649[1] = 1);
return statearr_27649;
});
var state_machine__22502__auto____1 = (function (state_27629){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_27629);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e27650){if((e27650 instanceof Object))
{var ex__22505__auto__ = e27650;var statearr_27651_28713 = state_27629;(statearr_27651_28713[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27629);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27650;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28714 = state_27629;
state_27629 = G__28714;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_27629){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_27629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto___28702,out))
})();var state__22579__auto__ = (function (){var statearr_27652 = f__22578__auto__.call(null);(statearr_27652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28702);
return statearr_27652;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___28702,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22577__auto___28715 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___28715,out){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto___28715,out){
return (function (state_27722){var state_val_27723 = (state_27722[1]);if((state_val_27723 === 1))
{var inst_27699 = 0;var state_27722__$1 = (function (){var statearr_27724 = state_27722;(statearr_27724[7] = inst_27699);
return statearr_27724;
})();var statearr_27725_28716 = state_27722__$1;(statearr_27725_28716[2] = null);
(statearr_27725_28716[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27723 === 2))
{var inst_27699 = (state_27722[7]);var inst_27701 = (inst_27699 < n);var state_27722__$1 = state_27722;if(cljs.core.truth_(inst_27701))
{var statearr_27726_28717 = state_27722__$1;(statearr_27726_28717[1] = 4);
} else
{var statearr_27727_28718 = state_27722__$1;(statearr_27727_28718[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27723 === 3))
{var inst_27719 = (state_27722[2]);var inst_27720 = cljs.core.async.close_BANG_.call(null,out);var state_27722__$1 = (function (){var statearr_27728 = state_27722;(statearr_27728[8] = inst_27719);
return statearr_27728;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27722__$1,inst_27720);
} else
{if((state_val_27723 === 4))
{var state_27722__$1 = state_27722;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27722__$1,7,ch);
} else
{if((state_val_27723 === 5))
{var state_27722__$1 = state_27722;var statearr_27729_28719 = state_27722__$1;(statearr_27729_28719[2] = null);
(statearr_27729_28719[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27723 === 6))
{var inst_27717 = (state_27722[2]);var state_27722__$1 = state_27722;var statearr_27730_28720 = state_27722__$1;(statearr_27730_28720[2] = inst_27717);
(statearr_27730_28720[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27723 === 7))
{var inst_27704 = (state_27722[9]);var inst_27704__$1 = (state_27722[2]);var inst_27705 = (inst_27704__$1 == null);var inst_27706 = cljs.core.not.call(null,inst_27705);var state_27722__$1 = (function (){var statearr_27731 = state_27722;(statearr_27731[9] = inst_27704__$1);
return statearr_27731;
})();if(inst_27706)
{var statearr_27732_28721 = state_27722__$1;(statearr_27732_28721[1] = 8);
} else
{var statearr_27733_28722 = state_27722__$1;(statearr_27733_28722[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27723 === 8))
{var inst_27704 = (state_27722[9]);var state_27722__$1 = state_27722;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27722__$1,11,out,inst_27704);
} else
{if((state_val_27723 === 9))
{var state_27722__$1 = state_27722;var statearr_27734_28723 = state_27722__$1;(statearr_27734_28723[2] = null);
(statearr_27734_28723[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27723 === 10))
{var inst_27714 = (state_27722[2]);var state_27722__$1 = state_27722;var statearr_27735_28724 = state_27722__$1;(statearr_27735_28724[2] = inst_27714);
(statearr_27735_28724[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27723 === 11))
{var inst_27699 = (state_27722[7]);var inst_27709 = (state_27722[2]);var inst_27710 = (inst_27699 + 1);var inst_27699__$1 = inst_27710;var state_27722__$1 = (function (){var statearr_27736 = state_27722;(statearr_27736[10] = inst_27709);
(statearr_27736[7] = inst_27699__$1);
return statearr_27736;
})();var statearr_27737_28725 = state_27722__$1;(statearr_27737_28725[2] = null);
(statearr_27737_28725[1] = 2);
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
});})(c__22577__auto___28715,out))
;return ((function (switch__22501__auto__,c__22577__auto___28715,out){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_27741 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27741[0] = state_machine__22502__auto__);
(statearr_27741[1] = 1);
return statearr_27741;
});
var state_machine__22502__auto____1 = (function (state_27722){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_27722);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e27742){if((e27742 instanceof Object))
{var ex__22505__auto__ = e27742;var statearr_27743_28726 = state_27722;(statearr_27743_28726[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27722);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27742;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28727 = state_27722;
state_27722 = G__28727;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_27722){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_27722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto___28715,out))
})();var state__22579__auto__ = (function (){var statearr_27744 = f__22578__auto__.call(null);(statearr_27744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28715);
return statearr_27744;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___28715,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t27752 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27752 = (function (ch,f,map_LT_,meta27753){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27753 = meta27753;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27752.cljs$lang$type = true;
cljs.core.async.t27752.cljs$lang$ctorStr = "cljs.core.async/t27752";
cljs.core.async.t27752.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27752");
});
cljs.core.async.t27752.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27752.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t27752.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27752.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t27755 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27755 = (function (fn1,_,meta27753,ch,f,map_LT_,meta27756){
this.fn1 = fn1;
this._ = _;
this.meta27753 = meta27753;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27756 = meta27756;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27755.cljs$lang$type = true;
cljs.core.async.t27755.cljs$lang$ctorStr = "cljs.core.async/t27755";
cljs.core.async.t27755.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27755");
});})(___$1))
;
cljs.core.async.t27755.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27755.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t27755.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t27755.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__27745_SHARP_){return f1.call(null,(((p1__27745_SHARP_ == null))?null:self__.f.call(null,p1__27745_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t27755.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27757){var self__ = this;
var _27757__$1 = this;return self__.meta27756;
});})(___$1))
;
cljs.core.async.t27755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27757,meta27756__$1){var self__ = this;
var _27757__$1 = this;return (new cljs.core.async.t27755(self__.fn1,self__._,self__.meta27753,self__.ch,self__.f,self__.map_LT_,meta27756__$1));
});})(___$1))
;
cljs.core.async.__GT_t27755 = ((function (___$1){
return (function __GT_t27755(fn1__$1,___$2,meta27753__$1,ch__$2,f__$2,map_LT___$2,meta27756){return (new cljs.core.async.t27755(fn1__$1,___$2,meta27753__$1,ch__$2,f__$2,map_LT___$2,meta27756));
});})(___$1))
;
}
return (new cljs.core.async.t27755(fn1,___$1,self__.meta27753,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__19791__auto__ = ret;if(cljs.core.truth_(and__19791__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__19791__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t27752.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27752.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27752.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t27752.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27754){var self__ = this;
var _27754__$1 = this;return self__.meta27753;
});
cljs.core.async.t27752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27754,meta27753__$1){var self__ = this;
var _27754__$1 = this;return (new cljs.core.async.t27752(self__.ch,self__.f,self__.map_LT_,meta27753__$1));
});
cljs.core.async.__GT_t27752 = (function __GT_t27752(ch__$1,f__$1,map_LT___$1,meta27753){return (new cljs.core.async.t27752(ch__$1,f__$1,map_LT___$1,meta27753));
});
}
return (new cljs.core.async.t27752(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t27761 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27761 = (function (ch,f,map_GT_,meta27762){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta27762 = meta27762;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27761.cljs$lang$type = true;
cljs.core.async.t27761.cljs$lang$ctorStr = "cljs.core.async/t27761";
cljs.core.async.t27761.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27761");
});
cljs.core.async.t27761.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27761.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t27761.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27761.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t27761.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27761.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27761.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27763){var self__ = this;
var _27763__$1 = this;return self__.meta27762;
});
cljs.core.async.t27761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27763,meta27762__$1){var self__ = this;
var _27763__$1 = this;return (new cljs.core.async.t27761(self__.ch,self__.f,self__.map_GT_,meta27762__$1));
});
cljs.core.async.__GT_t27761 = (function __GT_t27761(ch__$1,f__$1,map_GT___$1,meta27762){return (new cljs.core.async.t27761(ch__$1,f__$1,map_GT___$1,meta27762));
});
}
return (new cljs.core.async.t27761(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t27767 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27767 = (function (ch,p,filter_GT_,meta27768){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta27768 = meta27768;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27767.cljs$lang$type = true;
cljs.core.async.t27767.cljs$lang$ctorStr = "cljs.core.async/t27767";
cljs.core.async.t27767.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27767");
});
cljs.core.async.t27767.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27767.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t27767.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27767.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t27767.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27767.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27767.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t27767.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27769){var self__ = this;
var _27769__$1 = this;return self__.meta27768;
});
cljs.core.async.t27767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27769,meta27768__$1){var self__ = this;
var _27769__$1 = this;return (new cljs.core.async.t27767(self__.ch,self__.p,self__.filter_GT_,meta27768__$1));
});
cljs.core.async.__GT_t27767 = (function __GT_t27767(ch__$1,p__$1,filter_GT___$1,meta27768){return (new cljs.core.async.t27767(ch__$1,p__$1,filter_GT___$1,meta27768));
});
}
return (new cljs.core.async.t27767(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22577__auto___28728 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___28728,out){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto___28728,out){
return (function (state_27831){var state_val_27832 = (state_27831[1]);if((state_val_27832 === 1))
{var state_27831__$1 = state_27831;var statearr_27833_28729 = state_27831__$1;(statearr_27833_28729[2] = null);
(statearr_27833_28729[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27832 === 2))
{var state_27831__$1 = state_27831;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27831__$1,4,ch);
} else
{if((state_val_27832 === 3))
{var inst_27829 = (state_27831[2]);var state_27831__$1 = state_27831;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27831__$1,inst_27829);
} else
{if((state_val_27832 === 4))
{var inst_27813 = (state_27831[7]);var inst_27813__$1 = (state_27831[2]);var inst_27814 = (inst_27813__$1 == null);var state_27831__$1 = (function (){var statearr_27834 = state_27831;(statearr_27834[7] = inst_27813__$1);
return statearr_27834;
})();if(cljs.core.truth_(inst_27814))
{var statearr_27835_28730 = state_27831__$1;(statearr_27835_28730[1] = 5);
} else
{var statearr_27836_28731 = state_27831__$1;(statearr_27836_28731[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27832 === 5))
{var inst_27816 = cljs.core.async.close_BANG_.call(null,out);var state_27831__$1 = state_27831;var statearr_27837_28732 = state_27831__$1;(statearr_27837_28732[2] = inst_27816);
(statearr_27837_28732[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27832 === 6))
{var inst_27813 = (state_27831[7]);var inst_27818 = p.call(null,inst_27813);var state_27831__$1 = state_27831;if(cljs.core.truth_(inst_27818))
{var statearr_27838_28733 = state_27831__$1;(statearr_27838_28733[1] = 8);
} else
{var statearr_27839_28734 = state_27831__$1;(statearr_27839_28734[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27832 === 7))
{var inst_27827 = (state_27831[2]);var state_27831__$1 = state_27831;var statearr_27840_28735 = state_27831__$1;(statearr_27840_28735[2] = inst_27827);
(statearr_27840_28735[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27832 === 8))
{var inst_27813 = (state_27831[7]);var state_27831__$1 = state_27831;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27831__$1,11,out,inst_27813);
} else
{if((state_val_27832 === 9))
{var state_27831__$1 = state_27831;var statearr_27841_28736 = state_27831__$1;(statearr_27841_28736[2] = null);
(statearr_27841_28736[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27832 === 10))
{var inst_27824 = (state_27831[2]);var state_27831__$1 = (function (){var statearr_27842 = state_27831;(statearr_27842[8] = inst_27824);
return statearr_27842;
})();var statearr_27843_28737 = state_27831__$1;(statearr_27843_28737[2] = null);
(statearr_27843_28737[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27832 === 11))
{var inst_27821 = (state_27831[2]);var state_27831__$1 = state_27831;var statearr_27844_28738 = state_27831__$1;(statearr_27844_28738[2] = inst_27821);
(statearr_27844_28738[1] = 10);
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
});})(c__22577__auto___28728,out))
;return ((function (switch__22501__auto__,c__22577__auto___28728,out){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_27848 = [null,null,null,null,null,null,null,null,null];(statearr_27848[0] = state_machine__22502__auto__);
(statearr_27848[1] = 1);
return statearr_27848;
});
var state_machine__22502__auto____1 = (function (state_27831){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_27831);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e27849){if((e27849 instanceof Object))
{var ex__22505__auto__ = e27849;var statearr_27850_28739 = state_27831;(statearr_27850_28739[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27831);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27849;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28740 = state_27831;
state_27831 = G__28740;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_27831){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_27831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto___28728,out))
})();var state__22579__auto__ = (function (){var statearr_27851 = f__22578__auto__.call(null);(statearr_27851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28728);
return statearr_27851;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___28728,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__22577__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto__){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto__){
return (function (state_28017){var state_val_28018 = (state_28017[1]);if((state_val_28018 === 1))
{var state_28017__$1 = state_28017;var statearr_28019_28741 = state_28017__$1;(statearr_28019_28741[2] = null);
(statearr_28019_28741[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28018 === 2))
{var state_28017__$1 = state_28017;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28017__$1,4,in$);
} else
{if((state_val_28018 === 3))
{var inst_28015 = (state_28017[2]);var state_28017__$1 = state_28017;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28017__$1,inst_28015);
} else
{if((state_val_28018 === 4))
{var inst_27958 = (state_28017[7]);var inst_27958__$1 = (state_28017[2]);var inst_27959 = (inst_27958__$1 == null);var state_28017__$1 = (function (){var statearr_28020 = state_28017;(statearr_28020[7] = inst_27958__$1);
return statearr_28020;
})();if(cljs.core.truth_(inst_27959))
{var statearr_28021_28742 = state_28017__$1;(statearr_28021_28742[1] = 5);
} else
{var statearr_28022_28743 = state_28017__$1;(statearr_28022_28743[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28018 === 5))
{var inst_27961 = cljs.core.async.close_BANG_.call(null,out);var state_28017__$1 = state_28017;var statearr_28023_28744 = state_28017__$1;(statearr_28023_28744[2] = inst_27961);
(statearr_28023_28744[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28018 === 6))
{var inst_27958 = (state_28017[7]);var inst_27967 = f.call(null,inst_27958);var inst_27968 = cljs.core.seq.call(null,inst_27967);var inst_27969 = inst_27968;var inst_27970 = null;var inst_27971 = 0;var inst_27972 = 0;var state_28017__$1 = (function (){var statearr_28024 = state_28017;(statearr_28024[8] = inst_27972);
(statearr_28024[9] = inst_27970);
(statearr_28024[10] = inst_27971);
(statearr_28024[11] = inst_27969);
return statearr_28024;
})();var statearr_28025_28745 = state_28017__$1;(statearr_28025_28745[2] = null);
(statearr_28025_28745[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28018 === 7))
{var inst_28013 = (state_28017[2]);var state_28017__$1 = state_28017;var statearr_28026_28746 = state_28017__$1;(statearr_28026_28746[2] = inst_28013);
(statearr_28026_28746[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28018 === 8))
{var inst_27972 = (state_28017[8]);var inst_27971 = (state_28017[10]);var inst_27974 = (inst_27972 < inst_27971);var inst_27975 = inst_27974;var state_28017__$1 = state_28017;if(cljs.core.truth_(inst_27975))
{var statearr_28027_28747 = state_28017__$1;(statearr_28027_28747[1] = 10);
} else
{var statearr_28028_28748 = state_28017__$1;(statearr_28028_28748[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28018 === 9))
{var inst_28005 = (state_28017[2]);var inst_28006 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_28017__$1 = (function (){var statearr_28029 = state_28017;(statearr_28029[12] = inst_28005);
return statearr_28029;
})();if(cljs.core.truth_(inst_28006))
{var statearr_28030_28749 = state_28017__$1;(statearr_28030_28749[1] = 21);
} else
{var statearr_28031_28750 = state_28017__$1;(statearr_28031_28750[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28018 === 10))
{var inst_27972 = (state_28017[8]);var inst_27970 = (state_28017[9]);var inst_27977 = cljs.core._nth.call(null,inst_27970,inst_27972);var state_28017__$1 = state_28017;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28017__$1,13,out,inst_27977);
} else
{if((state_val_28018 === 11))
{var inst_27983 = (state_28017[13]);var inst_27969 = (state_28017[11]);var inst_27983__$1 = cljs.core.seq.call(null,inst_27969);var state_28017__$1 = (function (){var statearr_28035 = state_28017;(statearr_28035[13] = inst_27983__$1);
return statearr_28035;
})();if(inst_27983__$1)
{var statearr_28036_28751 = state_28017__$1;(statearr_28036_28751[1] = 14);
} else
{var statearr_28037_28752 = state_28017__$1;(statearr_28037_28752[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28018 === 12))
{var inst_28003 = (state_28017[2]);var state_28017__$1 = state_28017;var statearr_28038_28753 = state_28017__$1;(statearr_28038_28753[2] = inst_28003);
(statearr_28038_28753[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28018 === 13))
{var inst_27972 = (state_28017[8]);var inst_27970 = (state_28017[9]);var inst_27971 = (state_28017[10]);var inst_27969 = (state_28017[11]);var inst_27979 = (state_28017[2]);var inst_27980 = (inst_27972 + 1);var tmp28032 = inst_27970;var tmp28033 = inst_27971;var tmp28034 = inst_27969;var inst_27969__$1 = tmp28034;var inst_27970__$1 = tmp28032;var inst_27971__$1 = tmp28033;var inst_27972__$1 = inst_27980;var state_28017__$1 = (function (){var statearr_28039 = state_28017;(statearr_28039[8] = inst_27972__$1);
(statearr_28039[9] = inst_27970__$1);
(statearr_28039[10] = inst_27971__$1);
(statearr_28039[14] = inst_27979);
(statearr_28039[11] = inst_27969__$1);
return statearr_28039;
})();var statearr_28040_28754 = state_28017__$1;(statearr_28040_28754[2] = null);
(statearr_28040_28754[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28018 === 14))
{var inst_27983 = (state_28017[13]);var inst_27985 = cljs.core.chunked_seq_QMARK_.call(null,inst_27983);var state_28017__$1 = state_28017;if(inst_27985)
{var statearr_28041_28755 = state_28017__$1;(statearr_28041_28755[1] = 17);
} else
{var statearr_28042_28756 = state_28017__$1;(statearr_28042_28756[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28018 === 15))
{var state_28017__$1 = state_28017;var statearr_28043_28757 = state_28017__$1;(statearr_28043_28757[2] = null);
(statearr_28043_28757[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28018 === 16))
{var inst_28001 = (state_28017[2]);var state_28017__$1 = state_28017;var statearr_28044_28758 = state_28017__$1;(statearr_28044_28758[2] = inst_28001);
(statearr_28044_28758[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28018 === 17))
{var inst_27983 = (state_28017[13]);var inst_27987 = cljs.core.chunk_first.call(null,inst_27983);var inst_27988 = cljs.core.chunk_rest.call(null,inst_27983);var inst_27989 = cljs.core.count.call(null,inst_27987);var inst_27969 = inst_27988;var inst_27970 = inst_27987;var inst_27971 = inst_27989;var inst_27972 = 0;var state_28017__$1 = (function (){var statearr_28045 = state_28017;(statearr_28045[8] = inst_27972);
(statearr_28045[9] = inst_27970);
(statearr_28045[10] = inst_27971);
(statearr_28045[11] = inst_27969);
return statearr_28045;
})();var statearr_28046_28759 = state_28017__$1;(statearr_28046_28759[2] = null);
(statearr_28046_28759[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28018 === 18))
{var inst_27983 = (state_28017[13]);var inst_27992 = cljs.core.first.call(null,inst_27983);var state_28017__$1 = state_28017;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28017__$1,20,out,inst_27992);
} else
{if((state_val_28018 === 19))
{var inst_27998 = (state_28017[2]);var state_28017__$1 = state_28017;var statearr_28047_28760 = state_28017__$1;(statearr_28047_28760[2] = inst_27998);
(statearr_28047_28760[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28018 === 20))
{var inst_27983 = (state_28017[13]);var inst_27994 = (state_28017[2]);var inst_27995 = cljs.core.next.call(null,inst_27983);var inst_27969 = inst_27995;var inst_27970 = null;var inst_27971 = 0;var inst_27972 = 0;var state_28017__$1 = (function (){var statearr_28048 = state_28017;(statearr_28048[15] = inst_27994);
(statearr_28048[8] = inst_27972);
(statearr_28048[9] = inst_27970);
(statearr_28048[10] = inst_27971);
(statearr_28048[11] = inst_27969);
return statearr_28048;
})();var statearr_28049_28761 = state_28017__$1;(statearr_28049_28761[2] = null);
(statearr_28049_28761[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28018 === 21))
{var state_28017__$1 = state_28017;var statearr_28050_28762 = state_28017__$1;(statearr_28050_28762[2] = null);
(statearr_28050_28762[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28018 === 22))
{var state_28017__$1 = state_28017;var statearr_28051_28763 = state_28017__$1;(statearr_28051_28763[2] = null);
(statearr_28051_28763[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28018 === 23))
{var inst_28011 = (state_28017[2]);var state_28017__$1 = state_28017;var statearr_28052_28764 = state_28017__$1;(statearr_28052_28764[2] = inst_28011);
(statearr_28052_28764[1] = 7);
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
});})(c__22577__auto__))
;return ((function (switch__22501__auto__,c__22577__auto__){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_28056 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28056[0] = state_machine__22502__auto__);
(statearr_28056[1] = 1);
return statearr_28056;
});
var state_machine__22502__auto____1 = (function (state_28017){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_28017);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e28057){if((e28057 instanceof Object))
{var ex__22505__auto__ = e28057;var statearr_28058_28765 = state_28017;(statearr_28058_28765[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28017);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28057;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28766 = state_28017;
state_28017 = G__28766;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_28017){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_28017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto__))
})();var state__22579__auto__ = (function (){var statearr_28059 = f__22578__auto__.call(null);(statearr_28059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto__);
return statearr_28059;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto__))
);
return c__22577__auto__;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22577__auto___28767 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___28767,out){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto___28767,out){
return (function (state_28131){var state_val_28132 = (state_28131[1]);if((state_val_28132 === 1))
{var inst_28108 = null;var state_28131__$1 = (function (){var statearr_28133 = state_28131;(statearr_28133[7] = inst_28108);
return statearr_28133;
})();var statearr_28134_28768 = state_28131__$1;(statearr_28134_28768[2] = null);
(statearr_28134_28768[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28132 === 2))
{var state_28131__$1 = state_28131;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28131__$1,4,ch);
} else
{if((state_val_28132 === 3))
{var inst_28128 = (state_28131[2]);var inst_28129 = cljs.core.async.close_BANG_.call(null,out);var state_28131__$1 = (function (){var statearr_28135 = state_28131;(statearr_28135[8] = inst_28128);
return statearr_28135;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28131__$1,inst_28129);
} else
{if((state_val_28132 === 4))
{var inst_28111 = (state_28131[9]);var inst_28111__$1 = (state_28131[2]);var inst_28112 = (inst_28111__$1 == null);var inst_28113 = cljs.core.not.call(null,inst_28112);var state_28131__$1 = (function (){var statearr_28136 = state_28131;(statearr_28136[9] = inst_28111__$1);
return statearr_28136;
})();if(inst_28113)
{var statearr_28137_28769 = state_28131__$1;(statearr_28137_28769[1] = 5);
} else
{var statearr_28138_28770 = state_28131__$1;(statearr_28138_28770[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28132 === 5))
{var inst_28108 = (state_28131[7]);var inst_28111 = (state_28131[9]);var inst_28115 = cljs.core._EQ_.call(null,inst_28111,inst_28108);var state_28131__$1 = state_28131;if(inst_28115)
{var statearr_28139_28771 = state_28131__$1;(statearr_28139_28771[1] = 8);
} else
{var statearr_28140_28772 = state_28131__$1;(statearr_28140_28772[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28132 === 6))
{var state_28131__$1 = state_28131;var statearr_28142_28773 = state_28131__$1;(statearr_28142_28773[2] = null);
(statearr_28142_28773[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28132 === 7))
{var inst_28126 = (state_28131[2]);var state_28131__$1 = state_28131;var statearr_28143_28774 = state_28131__$1;(statearr_28143_28774[2] = inst_28126);
(statearr_28143_28774[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28132 === 8))
{var inst_28108 = (state_28131[7]);var tmp28141 = inst_28108;var inst_28108__$1 = tmp28141;var state_28131__$1 = (function (){var statearr_28144 = state_28131;(statearr_28144[7] = inst_28108__$1);
return statearr_28144;
})();var statearr_28145_28775 = state_28131__$1;(statearr_28145_28775[2] = null);
(statearr_28145_28775[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28132 === 9))
{var inst_28111 = (state_28131[9]);var state_28131__$1 = state_28131;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28131__$1,11,out,inst_28111);
} else
{if((state_val_28132 === 10))
{var inst_28123 = (state_28131[2]);var state_28131__$1 = state_28131;var statearr_28146_28776 = state_28131__$1;(statearr_28146_28776[2] = inst_28123);
(statearr_28146_28776[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28132 === 11))
{var inst_28111 = (state_28131[9]);var inst_28120 = (state_28131[2]);var inst_28108 = inst_28111;var state_28131__$1 = (function (){var statearr_28147 = state_28131;(statearr_28147[10] = inst_28120);
(statearr_28147[7] = inst_28108);
return statearr_28147;
})();var statearr_28148_28777 = state_28131__$1;(statearr_28148_28777[2] = null);
(statearr_28148_28777[1] = 2);
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
});})(c__22577__auto___28767,out))
;return ((function (switch__22501__auto__,c__22577__auto___28767,out){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_28152 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_28152[0] = state_machine__22502__auto__);
(statearr_28152[1] = 1);
return statearr_28152;
});
var state_machine__22502__auto____1 = (function (state_28131){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_28131);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e28153){if((e28153 instanceof Object))
{var ex__22505__auto__ = e28153;var statearr_28154_28778 = state_28131;(statearr_28154_28778[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28131);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28153;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28779 = state_28131;
state_28131 = G__28779;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_28131){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_28131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto___28767,out))
})();var state__22579__auto__ = (function (){var statearr_28155 = f__22578__auto__.call(null);(statearr_28155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28767);
return statearr_28155;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___28767,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22577__auto___28780 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___28780,out){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto___28780,out){
return (function (state_28260){var state_val_28261 = (state_28260[1]);if((state_val_28261 === 1))
{var inst_28223 = (new Array(n));var inst_28224 = inst_28223;var inst_28225 = 0;var state_28260__$1 = (function (){var statearr_28262 = state_28260;(statearr_28262[7] = inst_28225);
(statearr_28262[8] = inst_28224);
return statearr_28262;
})();var statearr_28263_28781 = state_28260__$1;(statearr_28263_28781[2] = null);
(statearr_28263_28781[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28261 === 2))
{var state_28260__$1 = state_28260;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28260__$1,4,ch);
} else
{if((state_val_28261 === 3))
{var inst_28258 = (state_28260[2]);var state_28260__$1 = state_28260;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28260__$1,inst_28258);
} else
{if((state_val_28261 === 4))
{var inst_28228 = (state_28260[9]);var inst_28228__$1 = (state_28260[2]);var inst_28229 = (inst_28228__$1 == null);var inst_28230 = cljs.core.not.call(null,inst_28229);var state_28260__$1 = (function (){var statearr_28264 = state_28260;(statearr_28264[9] = inst_28228__$1);
return statearr_28264;
})();if(inst_28230)
{var statearr_28265_28782 = state_28260__$1;(statearr_28265_28782[1] = 5);
} else
{var statearr_28266_28783 = state_28260__$1;(statearr_28266_28783[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28261 === 5))
{var inst_28225 = (state_28260[7]);var inst_28224 = (state_28260[8]);var inst_28228 = (state_28260[9]);var inst_28233 = (state_28260[10]);var inst_28232 = (inst_28224[inst_28225] = inst_28228);var inst_28233__$1 = (inst_28225 + 1);var inst_28234 = (inst_28233__$1 < n);var state_28260__$1 = (function (){var statearr_28267 = state_28260;(statearr_28267[10] = inst_28233__$1);
(statearr_28267[11] = inst_28232);
return statearr_28267;
})();if(cljs.core.truth_(inst_28234))
{var statearr_28268_28784 = state_28260__$1;(statearr_28268_28784[1] = 8);
} else
{var statearr_28269_28785 = state_28260__$1;(statearr_28269_28785[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28261 === 6))
{var inst_28225 = (state_28260[7]);var inst_28246 = (inst_28225 > 0);var state_28260__$1 = state_28260;if(cljs.core.truth_(inst_28246))
{var statearr_28271_28786 = state_28260__$1;(statearr_28271_28786[1] = 12);
} else
{var statearr_28272_28787 = state_28260__$1;(statearr_28272_28787[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28261 === 7))
{var inst_28256 = (state_28260[2]);var state_28260__$1 = state_28260;var statearr_28273_28788 = state_28260__$1;(statearr_28273_28788[2] = inst_28256);
(statearr_28273_28788[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28261 === 8))
{var inst_28224 = (state_28260[8]);var inst_28233 = (state_28260[10]);var tmp28270 = inst_28224;var inst_28224__$1 = tmp28270;var inst_28225 = inst_28233;var state_28260__$1 = (function (){var statearr_28274 = state_28260;(statearr_28274[7] = inst_28225);
(statearr_28274[8] = inst_28224__$1);
return statearr_28274;
})();var statearr_28275_28789 = state_28260__$1;(statearr_28275_28789[2] = null);
(statearr_28275_28789[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28261 === 9))
{var inst_28224 = (state_28260[8]);var inst_28238 = cljs.core.vec.call(null,inst_28224);var state_28260__$1 = state_28260;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28260__$1,11,out,inst_28238);
} else
{if((state_val_28261 === 10))
{var inst_28244 = (state_28260[2]);var state_28260__$1 = state_28260;var statearr_28276_28790 = state_28260__$1;(statearr_28276_28790[2] = inst_28244);
(statearr_28276_28790[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28261 === 11))
{var inst_28240 = (state_28260[2]);var inst_28241 = (new Array(n));var inst_28224 = inst_28241;var inst_28225 = 0;var state_28260__$1 = (function (){var statearr_28277 = state_28260;(statearr_28277[7] = inst_28225);
(statearr_28277[8] = inst_28224);
(statearr_28277[12] = inst_28240);
return statearr_28277;
})();var statearr_28278_28791 = state_28260__$1;(statearr_28278_28791[2] = null);
(statearr_28278_28791[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28261 === 12))
{var inst_28224 = (state_28260[8]);var inst_28248 = cljs.core.vec.call(null,inst_28224);var state_28260__$1 = state_28260;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28260__$1,15,out,inst_28248);
} else
{if((state_val_28261 === 13))
{var state_28260__$1 = state_28260;var statearr_28279_28792 = state_28260__$1;(statearr_28279_28792[2] = null);
(statearr_28279_28792[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28261 === 14))
{var inst_28253 = (state_28260[2]);var inst_28254 = cljs.core.async.close_BANG_.call(null,out);var state_28260__$1 = (function (){var statearr_28280 = state_28260;(statearr_28280[13] = inst_28253);
return statearr_28280;
})();var statearr_28281_28793 = state_28260__$1;(statearr_28281_28793[2] = inst_28254);
(statearr_28281_28793[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28261 === 15))
{var inst_28250 = (state_28260[2]);var state_28260__$1 = state_28260;var statearr_28282_28794 = state_28260__$1;(statearr_28282_28794[2] = inst_28250);
(statearr_28282_28794[1] = 14);
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
});})(c__22577__auto___28780,out))
;return ((function (switch__22501__auto__,c__22577__auto___28780,out){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_28286 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28286[0] = state_machine__22502__auto__);
(statearr_28286[1] = 1);
return statearr_28286;
});
var state_machine__22502__auto____1 = (function (state_28260){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_28260);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e28287){if((e28287 instanceof Object))
{var ex__22505__auto__ = e28287;var statearr_28288_28795 = state_28260;(statearr_28288_28795[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28260);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28287;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28796 = state_28260;
state_28260 = G__28796;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_28260){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_28260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto___28780,out))
})();var state__22579__auto__ = (function (){var statearr_28289 = f__22578__auto__.call(null);(statearr_28289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28780);
return statearr_28289;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___28780,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22577__auto___28797 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___28797,out){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto___28797,out){
return (function (state_28402){var state_val_28403 = (state_28402[1]);if((state_val_28403 === 1))
{var inst_28361 = [];var inst_28362 = inst_28361;var inst_28363 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_28402__$1 = (function (){var statearr_28404 = state_28402;(statearr_28404[7] = inst_28363);
(statearr_28404[8] = inst_28362);
return statearr_28404;
})();var statearr_28405_28798 = state_28402__$1;(statearr_28405_28798[2] = null);
(statearr_28405_28798[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28403 === 2))
{var state_28402__$1 = state_28402;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28402__$1,4,ch);
} else
{if((state_val_28403 === 3))
{var inst_28400 = (state_28402[2]);var state_28402__$1 = state_28402;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28402__$1,inst_28400);
} else
{if((state_val_28403 === 4))
{var inst_28366 = (state_28402[9]);var inst_28366__$1 = (state_28402[2]);var inst_28367 = (inst_28366__$1 == null);var inst_28368 = cljs.core.not.call(null,inst_28367);var state_28402__$1 = (function (){var statearr_28406 = state_28402;(statearr_28406[9] = inst_28366__$1);
return statearr_28406;
})();if(inst_28368)
{var statearr_28407_28799 = state_28402__$1;(statearr_28407_28799[1] = 5);
} else
{var statearr_28408_28800 = state_28402__$1;(statearr_28408_28800[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28403 === 5))
{var inst_28366 = (state_28402[9]);var inst_28363 = (state_28402[7]);var inst_28370 = (state_28402[10]);var inst_28370__$1 = f.call(null,inst_28366);var inst_28371 = cljs.core._EQ_.call(null,inst_28370__$1,inst_28363);var inst_28372 = cljs.core.keyword_identical_QMARK_.call(null,inst_28363,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_28373 = (inst_28371) || (inst_28372);var state_28402__$1 = (function (){var statearr_28409 = state_28402;(statearr_28409[10] = inst_28370__$1);
return statearr_28409;
})();if(cljs.core.truth_(inst_28373))
{var statearr_28410_28801 = state_28402__$1;(statearr_28410_28801[1] = 8);
} else
{var statearr_28411_28802 = state_28402__$1;(statearr_28411_28802[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28403 === 6))
{var inst_28362 = (state_28402[8]);var inst_28387 = inst_28362.length;var inst_28388 = (inst_28387 > 0);var state_28402__$1 = state_28402;if(cljs.core.truth_(inst_28388))
{var statearr_28413_28803 = state_28402__$1;(statearr_28413_28803[1] = 12);
} else
{var statearr_28414_28804 = state_28402__$1;(statearr_28414_28804[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28403 === 7))
{var inst_28398 = (state_28402[2]);var state_28402__$1 = state_28402;var statearr_28415_28805 = state_28402__$1;(statearr_28415_28805[2] = inst_28398);
(statearr_28415_28805[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28403 === 8))
{var inst_28366 = (state_28402[9]);var inst_28362 = (state_28402[8]);var inst_28370 = (state_28402[10]);var inst_28375 = inst_28362.push(inst_28366);var tmp28412 = inst_28362;var inst_28362__$1 = tmp28412;var inst_28363 = inst_28370;var state_28402__$1 = (function (){var statearr_28416 = state_28402;(statearr_28416[7] = inst_28363);
(statearr_28416[8] = inst_28362__$1);
(statearr_28416[11] = inst_28375);
return statearr_28416;
})();var statearr_28417_28806 = state_28402__$1;(statearr_28417_28806[2] = null);
(statearr_28417_28806[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28403 === 9))
{var inst_28362 = (state_28402[8]);var inst_28378 = cljs.core.vec.call(null,inst_28362);var state_28402__$1 = state_28402;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28402__$1,11,out,inst_28378);
} else
{if((state_val_28403 === 10))
{var inst_28385 = (state_28402[2]);var state_28402__$1 = state_28402;var statearr_28418_28807 = state_28402__$1;(statearr_28418_28807[2] = inst_28385);
(statearr_28418_28807[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28403 === 11))
{var inst_28366 = (state_28402[9]);var inst_28370 = (state_28402[10]);var inst_28380 = (state_28402[2]);var inst_28381 = [];var inst_28382 = inst_28381.push(inst_28366);var inst_28362 = inst_28381;var inst_28363 = inst_28370;var state_28402__$1 = (function (){var statearr_28419 = state_28402;(statearr_28419[7] = inst_28363);
(statearr_28419[8] = inst_28362);
(statearr_28419[12] = inst_28380);
(statearr_28419[13] = inst_28382);
return statearr_28419;
})();var statearr_28420_28808 = state_28402__$1;(statearr_28420_28808[2] = null);
(statearr_28420_28808[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28403 === 12))
{var inst_28362 = (state_28402[8]);var inst_28390 = cljs.core.vec.call(null,inst_28362);var state_28402__$1 = state_28402;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28402__$1,15,out,inst_28390);
} else
{if((state_val_28403 === 13))
{var state_28402__$1 = state_28402;var statearr_28421_28809 = state_28402__$1;(statearr_28421_28809[2] = null);
(statearr_28421_28809[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28403 === 14))
{var inst_28395 = (state_28402[2]);var inst_28396 = cljs.core.async.close_BANG_.call(null,out);var state_28402__$1 = (function (){var statearr_28422 = state_28402;(statearr_28422[14] = inst_28395);
return statearr_28422;
})();var statearr_28423_28810 = state_28402__$1;(statearr_28423_28810[2] = inst_28396);
(statearr_28423_28810[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28403 === 15))
{var inst_28392 = (state_28402[2]);var state_28402__$1 = state_28402;var statearr_28424_28811 = state_28402__$1;(statearr_28424_28811[2] = inst_28392);
(statearr_28424_28811[1] = 14);
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
});})(c__22577__auto___28797,out))
;return ((function (switch__22501__auto__,c__22577__auto___28797,out){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_28428 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28428[0] = state_machine__22502__auto__);
(statearr_28428[1] = 1);
return statearr_28428;
});
var state_machine__22502__auto____1 = (function (state_28402){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_28402);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e28429){if((e28429 instanceof Object))
{var ex__22505__auto__ = e28429;var statearr_28430_28812 = state_28402;(statearr_28430_28812[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28402);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28429;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28813 = state_28402;
state_28402 = G__28813;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_28402){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_28402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto___28797,out))
})();var state__22579__auto__ = (function (){var statearr_28431 = f__22578__auto__.call(null);(statearr_28431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28797);
return statearr_28431;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___28797,out))
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
goog.require('lt.plugins.doc');
goog.require('lt.plugins.doc');
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.objs.editor.lint","linters","lt.objs.editor.lint/linters",1778761659),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linters","linters",1191258613)], null),new cljs.core.Keyword(null,"by-tag","by-tag",3932762262),cljs.core.PersistentArrayMap.EMPTY);
lt.objs.editor.lint.linters = lt.object.create.call(null,new cljs.core.Keyword("lt.objs.editor.lint","linters","lt.objs.editor.lint/linters",1778761659));
lt.objs.editor.lint.default_timeout = 5000;
lt.objs.editor.lint.verify_linter_result = (function verify_linter_result(obj,res){if((res == null))
{return lt.objs.console.error.call(null,[cljs.core.str("No response received from linter "),cljs.core.str(new cljs.core.Keyword(null,"linter-name","linter-name",2860858810).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)))].join(''));
} else
{if(cljs.core.truth_((function (){var and__19791__auto__ = cljs.core.map_QMARK_.call(null,res);if(and__19791__auto__)
{return new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(res);
} else
{return and__19791__auto__;
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
lt.objs.editor.lint.__GT_cm_lint_msg = (function __GT_cm_lint_msg(p__38921){var map__38923 = p__38921;var map__38923__$1 = ((cljs.core.seq_QMARK_.call(null,map__38923))?cljs.core.apply.call(null,cljs.core.hash_map,map__38923):map__38923);var msg = map__38923__$1;var to = cljs.core.get.call(null,map__38923__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from = cljs.core.get.call(null,map__38923__$1,new cljs.core.Keyword(null,"from","from",1017056028));return cljs.core.assoc.call(null,msg,new cljs.core.Keyword(null,"from","from",1017056028),CodeMirror.Pos(cljs.core.first.call(null,from),cljs.core.last.call(null,from)),new cljs.core.Keyword(null,"to","to",1013907949),CodeMirror.Pos(cljs.core.first.call(null,to),cljs.core.last.call(null,to)));
});
lt.objs.editor.lint.is_lint_mark_QMARK_ = (function is_lint_mark_QMARK_(tm){return cljs.core.re_find.call(null,/^CodeMirror-lint-mark-/,tm.className);
});
lt.objs.editor.lint.lint_messages_for_cursor = (function lint_messages_for_cursor(ed){var text_marks = lt.objs.editor.find_marks.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed));return cljs.core.seq.call(null,cljs.core.filter.call(null,lt.objs.editor.lint.is_lint_mark_QMARK_,text_marks));
});
lt.objs.editor.lint.text_mark__GT_lint_result = (function text_mark__GT_lint_result(text_mark){return cljs.core.js__GT_clj.call(null,text_mark.__annotation,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
lt.objs.editor.lint.on_cursor_activity = (function on_cursor_activity(ed){var temp__4090__auto__ = lt.objs.editor.lint.lint_messages_for_cursor.call(null,ed);if(temp__4090__auto__)
{var lint_marks = temp__4090__auto__;if((1 < cljs.core.count.call(null,lint_marks)))
{return lt.objs.notifos.set_msg_BANG_.call(null,"Multiple lint messages found.");
} else
{var annotation = lt.objs.editor.lint.text_mark__GT_lint_result.call(null,cljs.core.first.call(null,lint_marks));return lt.objs.notifos.set_msg_BANG_.call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(annotation),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.Keyword(null,"severity","severity",2492204655).cljs$core$IFn$_invoke$arity$1(annotation)], null));
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
var validate_chans = cljs.core.map.call(null,(function (obj){var ch = cljs.core.async.timeout.call(null,(function (){var or__19803__auto__ = new cljs.core.Keyword(null,"timeout","timeout",3994960083).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj));if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return lt.objs.editor.lint.default_timeout;
}
})());var callback_fn = ((function (ch){
return (function (results){var c__22577__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto__,ch){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto__,ch){
return (function (state_39015){var state_val_39016 = (state_39015[1]);if((state_val_39016 === 2))
{var inst_39013 = (state_39015[2]);var state_39015__$1 = state_39015;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39015__$1,inst_39013);
} else
{if((state_val_39016 === 1))
{var inst_39010 = (function (){return ((function (state_val_39016,c__22577__auto__,ch){
return (function (p1__38924_SHARP_){return cljs.core.assoc.call(null,p1__38924_SHARP_,new cljs.core.Keyword(null,"from-linter","from-linter",3884841701),obj);
});
;})(state_val_39016,c__22577__auto__,ch))
})();var inst_39011 = cljs.core.map.call(null,inst_39010,results);var state_39015__$1 = state_39015;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39015__$1,2,ch,inst_39011);
} else
{return null;
}
}
});})(c__22577__auto__,ch))
;return ((function (switch__22501__auto__,c__22577__auto__,ch){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_39020 = [null,null,null,null,null,null,null];(statearr_39020[0] = state_machine__22502__auto__);
(statearr_39020[1] = 1);
return statearr_39020;
});
var state_machine__22502__auto____1 = (function (state_39015){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_39015);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e39021){if((e39021 instanceof Object))
{var ex__22505__auto__ = e39021;var statearr_39022_39104 = state_39015;(statearr_39022_39104[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39015);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e39021;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__39105 = state_39015;
state_39015 = G__39105;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_39015){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_39015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto__,ch))
})();var state__22579__auto__ = (function (){var statearr_39023 = f__22578__auto__.call(null);(statearr_39023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto__);
return statearr_39023;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto__,ch))
);
return c__22577__auto__;
});})(ch))
;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch,callback_fn,obj], null);
}),linter_objs);var seq__39024_39106 = cljs.core.seq.call(null,validate_chans);var chunk__39025_39107 = null;var count__39026_39108 = 0;var i__39027_39109 = 0;while(true){
if((i__39027_39109 < count__39026_39108))
{var vec__39028_39110 = cljs.core._nth.call(null,chunk__39025_39107,i__39027_39109);var __39111 = cljs.core.nth.call(null,vec__39028_39110,0,null);var f_39112 = cljs.core.nth.call(null,vec__39028_39110,1,null);var obj_39113 = cljs.core.nth.call(null,vec__39028_39110,2,null);lt.object.raise.call(null,obj_39113,new cljs.core.Keyword("lt.objs.editor.lint","validate","lt.objs.editor.lint/validate",4434222894),editor_text,f_39112,ed);
{
var G__39114 = seq__39024_39106;
var G__39115 = chunk__39025_39107;
var G__39116 = count__39026_39108;
var G__39117 = (i__39027_39109 + 1);
seq__39024_39106 = G__39114;
chunk__39025_39107 = G__39115;
count__39026_39108 = G__39116;
i__39027_39109 = G__39117;
continue;
}
} else
{var temp__4092__auto___39118 = cljs.core.seq.call(null,seq__39024_39106);if(temp__4092__auto___39118)
{var seq__39024_39119__$1 = temp__4092__auto___39118;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39024_39119__$1))
{var c__20551__auto___39120 = cljs.core.chunk_first.call(null,seq__39024_39119__$1);{
var G__39121 = cljs.core.chunk_rest.call(null,seq__39024_39119__$1);
var G__39122 = c__20551__auto___39120;
var G__39123 = cljs.core.count.call(null,c__20551__auto___39120);
var G__39124 = 0;
seq__39024_39106 = G__39121;
chunk__39025_39107 = G__39122;
count__39026_39108 = G__39123;
i__39027_39109 = G__39124;
continue;
}
} else
{var vec__39029_39125 = cljs.core.first.call(null,seq__39024_39119__$1);var __39126 = cljs.core.nth.call(null,vec__39029_39125,0,null);var f_39127 = cljs.core.nth.call(null,vec__39029_39125,1,null);var obj_39128 = cljs.core.nth.call(null,vec__39029_39125,2,null);lt.object.raise.call(null,obj_39128,new cljs.core.Keyword("lt.objs.editor.lint","validate","lt.objs.editor.lint/validate",4434222894),editor_text,f_39127,ed);
{
var G__39129 = cljs.core.next.call(null,seq__39024_39119__$1);
var G__39130 = null;
var G__39131 = 0;
var G__39132 = 0;
seq__39024_39106 = G__39129;
chunk__39025_39107 = G__39130;
count__39026_39108 = G__39131;
i__39027_39109 = G__39132;
continue;
}
}
} else
{}
}
break;
}
var c__22577__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto__,validate_chans){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto__,validate_chans){
return (function (state_39071){var state_val_39072 = (state_39071[1]);if((state_val_39072 === 1))
{var inst_39035 = cljs.core.nth.call(null,validate_chans,0,null);var inst_39036 = cljs.core.nth.call(null,inst_39035,0,null);var inst_39037 = cljs.core.nth.call(null,inst_39035,1,null);var inst_39038 = cljs.core.nth.call(null,inst_39035,2,null);var inst_39039 = cljs.core.nthnext.call(null,validate_chans,1);var inst_39040 = validate_chans;var inst_39041 = cljs.core.PersistentVector.EMPTY;var state_39071__$1 = (function (){var statearr_39073 = state_39071;(statearr_39073[7] = inst_39040);
(statearr_39073[8] = inst_39041);
(statearr_39073[9] = inst_39038);
(statearr_39073[10] = inst_39039);
(statearr_39073[11] = inst_39036);
(statearr_39073[12] = inst_39037);
return statearr_39073;
})();var statearr_39074_39133 = state_39071__$1;(statearr_39074_39133[2] = null);
(statearr_39074_39133[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39072 === 2))
{var inst_39040 = (state_39071[7]);var inst_39045 = cljs.core.nth.call(null,inst_39040,0,null);var inst_39046 = cljs.core.nth.call(null,inst_39045,0,null);var inst_39047 = cljs.core.nth.call(null,inst_39045,1,null);var inst_39048 = cljs.core.nth.call(null,inst_39045,2,null);var inst_39049 = cljs.core.nthnext.call(null,inst_39040,1);var state_39071__$1 = (function (){var statearr_39075 = state_39071;(statearr_39075[13] = inst_39049);
(statearr_39075[14] = inst_39047);
(statearr_39075[15] = inst_39048);
return statearr_39075;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39071__$1,4,inst_39046);
} else
{if((state_val_39072 === 3))
{var inst_39069 = (state_39071[2]);var state_39071__$1 = state_39071;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39071__$1,inst_39069);
} else
{if((state_val_39072 === 4))
{var inst_39052 = (state_39071[16]);var inst_39048 = (state_39071[15]);var inst_39051 = (state_39071[2]);var inst_39052__$1 = lt.objs.editor.lint.verify_linter_result.call(null,inst_39048,inst_39051);var state_39071__$1 = (function (){var statearr_39076 = state_39071;(statearr_39076[16] = inst_39052__$1);
return statearr_39076;
})();if(cljs.core.truth_(inst_39052__$1))
{var statearr_39077_39134 = state_39071__$1;(statearr_39077_39134[1] = 5);
} else
{var statearr_39078_39135 = state_39071__$1;(statearr_39078_39135[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39072 === 5))
{var inst_39041 = (state_39071[8]);var inst_39052 = (state_39071[16]);var inst_39054 = cljs.core.conj.call(null,inst_39041,inst_39052);var state_39071__$1 = state_39071;var statearr_39079_39136 = state_39071__$1;(statearr_39079_39136[2] = inst_39054);
(statearr_39079_39136[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39072 === 6))
{var inst_39041 = (state_39071[8]);var state_39071__$1 = state_39071;var statearr_39080_39137 = state_39071__$1;(statearr_39080_39137[2] = inst_39041);
(statearr_39080_39137[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39072 === 7))
{var inst_39049 = (state_39071[13]);var inst_39057 = (state_39071[2]);var inst_39058 = cljs.core.seq.call(null,inst_39049);var state_39071__$1 = (function (){var statearr_39081 = state_39071;(statearr_39081[17] = inst_39057);
return statearr_39081;
})();if(inst_39058)
{var statearr_39082_39138 = state_39071__$1;(statearr_39082_39138[1] = 8);
} else
{var statearr_39083_39139 = state_39071__$1;(statearr_39083_39139[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39072 === 8))
{var inst_39057 = (state_39071[17]);var inst_39049 = (state_39071[13]);var inst_39040 = inst_39049;var inst_39041 = inst_39057;var state_39071__$1 = (function (){var statearr_39084 = state_39071;(statearr_39084[7] = inst_39040);
(statearr_39084[8] = inst_39041);
return statearr_39084;
})();var statearr_39085_39140 = state_39071__$1;(statearr_39085_39140[2] = null);
(statearr_39085_39140[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39072 === 9))
{var inst_39057 = (state_39071[17]);var inst_39062 = cljs.core.apply.call(null,cljs.core.concat,inst_39057);var inst_39063 = cljs.core.map.call(null,lt.objs.editor.lint.__GT_cm_lint_msg,inst_39062);var inst_39064 = cljs.core.clj__GT_js.call(null,inst_39063);var inst_39065 = callback.call(null,inst_39064);var state_39071__$1 = state_39071;var statearr_39086_39141 = state_39071__$1;(statearr_39086_39141[2] = inst_39065);
(statearr_39086_39141[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39072 === 10))
{var inst_39067 = (state_39071[2]);var state_39071__$1 = state_39071;var statearr_39087_39142 = state_39071__$1;(statearr_39087_39142[2] = inst_39067);
(statearr_39087_39142[1] = 3);
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
});})(c__22577__auto__,validate_chans))
;return ((function (switch__22501__auto__,c__22577__auto__,validate_chans){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_39091 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_39091[0] = state_machine__22502__auto__);
(statearr_39091[1] = 1);
return statearr_39091;
});
var state_machine__22502__auto____1 = (function (state_39071){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_39071);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e39092){if((e39092 instanceof Object))
{var ex__22505__auto__ = e39092;var statearr_39093_39143 = state_39071;(statearr_39093_39143[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39071);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e39092;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__39144 = state_39071;
state_39071 = G__39144;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_39071){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_39071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto__,validate_chans))
})();var state__22579__auto__ = (function (){var statearr_39094 = f__22578__auto__.call(null);(statearr_39094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto__);
return statearr_39094;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto__,validate_chans))
);
return c__22577__auto__;
});
};
var validate_with_all_linters = function (ed,var_args){
var linter_objs = null;if (arguments.length > 1) {
  linter_objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return validate_with_all_linters__delegate.call(this,ed,linter_objs);};
validate_with_all_linters.cljs$lang$maxFixedArity = 1;
validate_with_all_linters.cljs$lang$applyTo = (function (arglist__39145){
var ed = cljs.core.first(arglist__39145);
var linter_objs = cljs.core.rest(arglist__39145);
return validate_with_all_linters__delegate(ed,linter_objs);
});
validate_with_all_linters.cljs$core$IFn$_invoke$arity$variadic = validate_with_all_linters__delegate;
return validate_with_all_linters;
})()
;
lt.objs.editor.lint.add_linter = (function add_linter(linters,linter_obj,args){var obj = cljs.core.apply.call(null,lt.object.create,linter_obj,args);return cljs.core.conj.call(null,cljs.core.remove.call(null,((function (obj){
return (function (p1__39095_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword("lt.object","type","lt.object/type",701613666).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__39095_SHARP_)),linter_obj);
});})(obj))
,linters),obj);
});
lt.objs.editor.lint.set_cm_lint_settings_BANG_ = (function set_cm_lint_settings_BANG_(ed){var map__39097 = new cljs.core.Keyword("lt.objs.editor.lint","settings","lt.objs.editor.lint/settings",1326887451).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var map__39097__$1 = ((cljs.core.seq_QMARK_.call(null,map__39097))?cljs.core.apply.call(null,cljs.core.hash_map,map__39097):map__39097);var change_timeout = cljs.core.get.call(null,map__39097__$1,new cljs.core.Keyword(null,"change-timeout","change-timeout",4761814966),500);var auto_QMARK_ = cljs.core.get.call(null,map__39097__$1,new cljs.core.Keyword(null,"auto?","auto?",1107086306),true);var fn = cljs.core.get.call(null,map__39097__$1,new cljs.core.Keyword(null,"fn","fn",1013907514));var lint_QMARK_ = cljs.core.get.call(null,map__39097__$1,new cljs.core.Keyword(null,"lint?","lint?",1116881934));return lt.objs.editor.set_options.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lint","lint",1017226101),(cljs.core.truth_(lint_QMARK_)?{"delay": change_timeout, "lintOnChange": auto_QMARK_, "getAnnotations": fn, "async": true}:null),new cljs.core.Keyword(null,"fixedGutter","fixedGutter",1733738785),false], null));
});
lt.objs.editor.lint.prepare_editor_for_linter = (function prepare_editor_for_linter(ed,p__39098){var vec__39100 = p__39098;var linter_obj = cljs.core.nth.call(null,vec__39100,0,null);var args = cljs.core.nthnext.call(null,vec__39100,1);lt.objs.editor.add_gutter.call(null,ed,"CodeMirror-lint-markers",10);
var ed_tag = cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword(null,"tags","tags",1017456523)], null)));var new_linters = lt.object.merge_BANG_.call(null,lt.objs.editor.lint.linters,cljs.core.update_in.call(null,cljs.core.deref.call(null,lt.objs.editor.lint.linters),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"by-tag","by-tag",3932762262),ed_tag], null),lt.objs.editor.lint.add_linter,linter_obj,args));var validator_fn = cljs.core.apply.call(null,lt.objs.editor.lint.validate_with_all_linters,ed,cljs.core.get_in.call(null,new_linters,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"by-tag","by-tag",3932762262),ed_tag], null)));lt.object.merge_BANG_.call(null,ed,cljs.core.update_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword("lt.objs.editor.lint","settings","lt.objs.editor.lint/settings",1326887451)], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lint?","lint?",1116881934),true,new cljs.core.Keyword(null,"fn","fn",1013907514),validator_fn], null)));
lt.objs.editor.lint.set_cm_lint_settings_BANG_.call(null,ed);
return new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.editor.lint","register-linter","lt.objs.editor.lint/register-linter",4391870434),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.editor.lint.prepare_editor_for_linter,new cljs.core.Keyword(null,"desc","desc",1016984067),"Editor: Register linter",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"linter",new cljs.core.Keyword(null,"example","example",3985900764),"[:lt.plugins.some-linter/linter-object :opt-arg1 val1 :opt-arg2 val2 ...]"], null)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));
lt.objs.editor.lint.__BEH__auto_linting_properties = (function __BEH__auto_linting_properties(ed,enabled_QMARK_,change_timeout){lt.object.merge_BANG_.call(null,ed,cljs.core.update_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword("lt.objs.editor.lint","settings","lt.objs.editor.lint/settings",1326887451)], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"auto?","auto?",1107086306),enabled_QMARK_,new cljs.core.Keyword(null,"change-timeout","change-timeout",4761814966),change_timeout], null)));
return lt.objs.editor.lint.set_cm_lint_settings_BANG_.call(null,ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.editor.lint","auto-linting-properties","lt.objs.editor.lint/auto-linting-properties",3156951719),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.editor.lint.__BEH__auto_linting_properties,new cljs.core.Keyword(null,"desc","desc",1016984067),"Editor: Auto linting settings",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"enabled?",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"boolean","boolean",1078615962)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"change timeout",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"number","number",4274507451)], null)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.objs.editor.lint","run-linters!","lt.objs.editor.lint/run-linters!",2862606664),new cljs.core.Keyword(null,"desc","desc",1016984067),"Linter: run linters for current editor",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.objs.editor.__GT_cm_ed.call(null,ed).performLint();
} else
{return null;
}
})], null));
lt.objs.editor.lint.doc_message_text = (function doc_message_text(p__39101){var map__39103 = p__39101;var map__39103__$1 = ((cljs.core.seq_QMARK_.call(null,map__39103))?cljs.core.apply.call(null,cljs.core.hash_map,map__39103):map__39103);var from_linter = cljs.core.get.call(null,map__39103__$1,new cljs.core.Keyword(null,"from-linter","from-linter",3884841701));var message = cljs.core.get.call(null,map__39103__$1,new cljs.core.Keyword(null,"message","message",1968829305));return [cljs.core.str(new cljs.core.Keyword(null,"linter-name","linter-name",2860858810).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,from_linter))),cljs.core.str(":\n\n"),cljs.core.str(message)].join('');
});
lt.objs.editor.lint.inline_doc_for_lint_messages = (function inline_doc_for_lint_messages(msgs){var msgs__$1 = cljs.core.map.call(null,lt.objs.editor.lint.text_mark__GT_lint_result,msgs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"loc","loc",1014011570),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msgs__$1)).line], null),new cljs.core.Keyword(null,"name","name",1017277949),"Lint results",new cljs.core.Keyword(null,"doc","doc",1014003882),clojure.string.join.call(null,"\n\n",cljs.core.map.call(null,lt.objs.editor.lint.doc_message_text,msgs__$1))], null);
});
lt.objs.editor.lint.show_lint_message = (function show_lint_message(ed,lint_messages){return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.doc.show!","editor.doc.show!",1417900223),lt.objs.editor.lint.inline_doc_for_lint_messages.call(null,lint_messages));
});
lt.objs.editor.lint.toggle_lint_message = (function toggle_lint_message(ed){var temp__4090__auto__ = lt.objs.editor.lint.lint_messages_for_cursor.call(null,ed);if(temp__4090__auto__)
{var lint_messages = temp__4090__auto__;var loc = lt.objs.editor.__GT_cursor.call(null,ed);var temp__4090__auto____$1 = lt.plugins.doc.doc_on_line_QMARK_.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(loc));if(cljs.core.truth_(temp__4090__auto____$1))
{var cur = temp__4090__auto____$1;return lt.plugins.doc.remove_BANG_.call(null,ed,cur);
} else
{return lt.objs.editor.lint.show_lint_message.call(null,ed,lint_messages);
}
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"No lint message found at cursor...",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.objs.editor.lint","toggle-lint-message","lt.objs.editor.lint/toggle-lint-message",3979025454),new cljs.core.Keyword(null,"desc","desc",1016984067),"Linter: toggle lint message",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.objs.editor.lint.toggle_lint_message.call(null,ed);
} else
{return null;
}
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.lt-lint')) {
goog.provide('lt.plugins.lt_lint');
goog.require('cljs.core');
goog.require('lt.plugins.example_linter');
goog.require('lt.objs.editor.lint');
}

//# sourceMappingURL=lt-lint_compiled.js.map